import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../userview/navbar/Navbar";
import Footer from "../../userview/footer/Footer";


const Root = () => {
     
    const location = useLocation()
    const HeaderandFooter_hide = location.pathname.includes('userProfile') || location.pathname.includes('invoic')
    return (
        <div>
            { HeaderandFooter_hide ||   <Navbar></Navbar>}
            <Outlet></Outlet>
            { HeaderandFooter_hide ||  <Footer></Footer> }
        </div>
    );
};

export default Root;