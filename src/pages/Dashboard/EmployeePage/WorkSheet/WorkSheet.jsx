import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TeamFlowContext } from "../../../../ContextApi/AuthContext";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useEmployeeTaskData from "../../../../hooks/useEmployeeTaskData";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const WorkSheet = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectTask, setSelectTask] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user, currentUser } = useContext(TeamFlowContext);

  const { tasks, refetch, isLoading, error } = useEmployeeTaskData();
  // console.log(currentUser)

  const handleAddTask = (e) => {
    e.preventDefault();

    const form = e.target;
    const task = form.task.value;
    const hour = form.hour.value;
    const date = form.date.value;
    const email = user?.email;
    const name =
      Array.isArray(currentUser) && currentUser[0]?.name
        ? currentUser[0].name
        : user?.displayName || "Unknown User";


    const newTask = { task, hour, date, name, email };

    axiosSecure
      .post("/all-tasks", newTask)
      .then(() => {
        Swal.fire("Success", "Task added successfully.", "success");
        refetch();
      })
      .catch(() => {
        Swal.fire("Error", "Failed to add task.", "error");
      });
  };

  const handleUpdate = (id) => {
    setShowModal(true);
    axiosSecure
      .get(`/single-task/${id}`)
      .then((res) => setSelectTask(res.data))
      .catch(() => Swal.fire("Error", "Failed to fetch task.", "error"));
  };

  const handleSave = () => {
    axiosSecure
      .put(`/single-task/${selectTask._id}`, selectTask)
      .then(() => {
        Swal.fire("Success", "Task updated successfully.", "success");
        refetch();
        setShowModal(false);
      })
      .catch(() => Swal.fire("Error", "Failed to update task.", "error"));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/task-delete/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Task deleted successfully.", "success");
            refetch();
          })
          .catch(() => Swal.fire("Error", "Failed to delete task.", "error"));
      }
    });
  };

  return (
    <>

      <Helmet >
        <title>TemFlow | WorkSheet </title>
      </Helmet>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Work Sheet</h2>

        {/* Form */}
        <div className="flex items-center mb-4 ">
          <form onSubmit={handleAddTask} className="space-y-3">
            <select name="task" className="select select-bordered mr-2">
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
            </select>
            <input
              type="number"
              name="hour"
              placeholder="Hours Worked"
              className="input input-bordered mr-2"
            />
            <DatePicker
              name="date"
              selected={new Date()}
              onChange={() => { }}
              className="input input-bordered mr-2"
            />
            <button type="submit" className="btn btn-primary px-8">
              Add
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="overflow-y-auto max-h-[480px]">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Task</th>
                <th>Hours Worked</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Loading tasks...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No task found
                  </td>
                </tr>
              ) : tasks.length > 0 ? (
                tasks
                  .slice() // Create a shallow copy of the array
                  .reverse() // Reverse the order of the array
                  .map((task, index) => (
                    <tr key={index}>
                      <td>{task.task}</td>
                      <td>{task.hour}</td>
                      <td>{task.date}</td>
                      <td className="space-y-2">
                        <button
                          className="bg-blue-500 mr-2 w-8 h-8"
                          onClick={() => handleUpdate(task._id)}
                        >
                          🖊
                        </button>
                        <button
                          className="bg-blue-500 w-8 h-8"
                          onClick={() => handleDelete(task._id)}
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No tasks available.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

        {/* Modal */}
        {showModal && selectTask && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Update Task</h3>
              <div className="mt-4 flex flex-col gap-4">
                <select
                  value={selectTask.task}
                  className="select select-bordered"
                  onChange={(e) =>
                    setSelectTask((prevTask) => ({
                      ...prevTask,
                      task: e.target.value,
                    }))
                  }
                >
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Content">Content</option>
                  <option value="Paper-work">Paper-work</option>
                </select>
                <input
                  type="number"
                  value={selectTask.hour}
                  onChange={(e) =>
                    setSelectTask((prevTask) => ({
                      ...prevTask,
                      hour: e.target.value,
                    }))
                  }
                  className="input input-bordered"
                />
                <DatePicker
                  selected={new Date(selectTask.date)}
                  onChange={(date) =>
                    setSelectTask((prevTask) => ({
                      ...prevTask,
                      date,
                    }))
                  }
                  className="input input-bordered"
                />
              </div>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-ghost" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkSheet;
