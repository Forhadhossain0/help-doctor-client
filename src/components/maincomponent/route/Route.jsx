import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Errror404 from "../error404/Errror404";
import Home from "../../userview/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Doctorprofile from "../../userview/home/expertDoctor/doctorprofile/Doctorprofile";
import Appoinment from "../../userview/appoinment/Appoinment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errror404></Errror404>,
    children : [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/appointment',
          element: <Appoinment></Appoinment>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/doctorprofile/:_id',
          element: <Doctorprofile></Doctorprofile>,
          loader: ({params}) => fetch(`http://localhost:5000/doctors/${params._id}`)
        }        

    ]
  },
]);

export default router;
