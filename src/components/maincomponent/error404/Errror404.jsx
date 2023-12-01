import { Link } from "react-router-dom";


const Errror404 = () => {
    return (
        <Link to={'/'}>
        <div className=" w-full">
        <img className="w-[500px] mx-auto h-[500px]" src="../../../../public//image//error.png" alt="" />
       </div>
       </Link>
    );
};

export default Errror404;