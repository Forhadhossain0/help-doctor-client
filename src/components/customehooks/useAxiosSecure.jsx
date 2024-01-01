import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://sohoj-seba-backend.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;