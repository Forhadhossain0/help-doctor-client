import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../userview/navbar/Navbar";
import Footer from "../../userview/footer/Footer";


const Root = () => {
     
//     const location = useLocation()
//     const HeaderandFooter_hide = location.pathname.includes('doctorprofile')
    return (
        <div>
      {      <Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;