import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Errror404 from "../error404/Errror404";
import Home from "../../userview/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Doctorprofile from "../../userview/home/expertDoctor/doctorprofile/Doctorprofile";
import Appoinment from "../../userview/appoinment/Appoinment";
import Dashboard from "../../dashboardpages/Dashboard/Dashboard";
import UserProfile from "../../dashboardpages/User/UserProfile";
import AdminProfile from "../../dashboardpages/Admin/AdminProfile";
import AllUser from "../../dashboardpages/Admin/AllUser";
import Invoic from "../../dashboardpages/User/Invoic";

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
          // loader: ({params}) => fetch(`https://sohoj-seba-backend.vercel.app/doctors/${params._id}`)
          loader: ({params}) => fetch(`https://sohoj-seba-backend.vercel.app/doctors/${params._id}`)
        },
              
        // user  
        { 
        path:"/invoic/:_id",
        element: <Invoic></Invoic>,
        loader: ({params}) => fetch(`https://sohoj-seba-backend.vercel.app/appoinment/${params._id}`)
        },     
      
    ]
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement : <Errror404></Errror404>,
    children:[
      //  admin 
      {
        path:'adminProfile',
        element: <AdminProfile></AdminProfile>
      },
      {
        path:'allUser',
        element: <AllUser></AllUser>
      },

      // user 
      { 
        path:"userProfile",
        element: <UserProfile></UserProfile>
      },     
      // { 
      //   path:"invoic/:_id",
      //   element: <Invoic></Invoic>,
      //   loader: ({params}) => fetch(`https://sohoj-seba-backend.vercel.app/appoinment/${params._id}`)
      // },     


      

      

    ]
  }


]);

export default router;
