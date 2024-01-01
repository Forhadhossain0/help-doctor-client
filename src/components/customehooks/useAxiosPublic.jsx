import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://sohoj-seba-backend.vercel.app'
    // baseURL: 'https://sohoj-seba-backend.vercel.app'

})

const useAxiosPublic = () => {    
    return axiosPublic;
};

export default useAxiosPublic;