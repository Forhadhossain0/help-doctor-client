import { Link } from "react-router-dom";


const Errror404 = () => {
    return (
        <Link to={'/'}>
        <div className=" w-full">
        <img className="w-[500px] mx-auto h-[500px]" src="https://i.ibb.co/bvBM558/error.png" alt="" />
       </div>
       </Link>
    );
};

export default Errror404;