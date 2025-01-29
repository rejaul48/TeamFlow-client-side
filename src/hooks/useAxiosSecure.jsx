import axios from "axios";

const axiosSecure = axios.create({
  // baseURL:  'http://localhost:5000',
    baseURL: 'https://team-flow-server-side.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {
  return axiosSecure     
}

export default useAxiosSecure
