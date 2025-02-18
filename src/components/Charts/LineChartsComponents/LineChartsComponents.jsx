import React, { useContext, useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { TeamFlowContext } from "../../../ContextApi/AuthContext";

const LineChartsComponents = () => {
    const { user } = useContext(TeamFlowContext);
    const axiosPublic = useAxiosPublic();
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        if (user) {
            axiosPublic.get("/all-tasks")
                .then((res) => {
                    // Group tasks by day and sum hours
                    const tasksByDay = res.data.reduce((acc, task) => {
                        const day = task.date; // Format: "MM/DD/YYYY"
                        acc[day] = (acc[day] || 0) + parseInt(task.hour, 10);
                        return acc;
                    }, {});

                    // Convert to chart format and sort by date
                    const formattedData = Object.keys(tasksByDay)
                        .map(date => ({
                            name: date,
                            hours: tasksByDay[date]
                        }))
                        .sort((a, b) => new Date(a.name) - new Date(b.name)); // Sort by date

                    setTaskData(formattedData);
                })
                .catch((error) => {
                    console.error("Error fetching task data:", error);
                });
        }
    }, [user, axiosPublic]);

    console.log("Formatted Task Data:", taskData);

    return (
        <>
            <section className="my-12">
                <div style={{ width: "100%", height: 350 }}>
                    <h2 className="text-center text-xl font-bold mb-4">Daily Task Progress</h2>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={taskData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fontSize: 12 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line   type="monotone" dataKey="hours" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </>
    );
};

export default LineChartsComponents;
