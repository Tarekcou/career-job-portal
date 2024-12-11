import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";

const router=createBrowserRouter([
  {
    path:"/",
   element:<MainLayout />,
   errorElement: <h1>Route no found0</h1>,
   children:[
     {path:"/", element:<Home />},
     {path:"/about", element:<About />},
     {path:"/register", element:<Register />},
     {path:"/login", element:<Register />}
     //add other routes here.
     //...
 
   ]
  }
])
export default router;