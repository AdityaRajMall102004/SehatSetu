import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import DashboardHeader from "./components/DashboardHeader";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import AnganwadiDashboard from "./components/AnganwadiDashboard";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const PublicLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );
  
  const DashboardLayout = () => (
    <>
        <DashboardHeader />
      <Outlet />
    </>
  );
  
const appRouter = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/login/:role", element: <Login /> },
      { path: "/signup/:role", element: <Signup /> },
      { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },

    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/PatientDashboard", element: <PatientDashboard /> },
      { path: "/DoctorDashboard", element: <DoctorDashboard /> },
      { path: "/AnganwadiDashboard", element: <AnganwadiDashboard /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);