import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./maincomponent/Error";
import Header from "./maincomponent/Header";
import DashboardHeader from "./maincomponent/DashboardHeader";
import Body from "./maincomponent/Body";
import Login from "./maincomponent/Login";
import Signup from "./maincomponent/Signup";
import PatientDashboard from "./patientComponent/PatientDashboard";
import DoctorDashboard from "./doctorComponent/DoctorDashboard";
import AnganwadiDashboard from "./aganwadiComponent/AnganwadiDashboard";
import About from "./maincomponent/About";
import Services from "./maincomponent/Services";
import Contact from "./maincomponent/Contact";
import MedicalDashboard from "./medicalComponent/MedicalDashboard";
import PatientProfile from "./patientComponent/PatientProfile";
import HealthRecords from "./patientComponent/HealthRecord";
import BookAppointment from "./patientComponent/BookAppointment";
import VideoCall from "./patientComponent/VideoCall";
  const PublicLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );
  const MedicalLayout = () => (
      <>
        <DashboardHeader />
        <Outlet/>
      </>
  );
 const PatientLayout = () => (
  <>
    <DashboardHeader />
    <Outlet />
  </>
);

const DoctorLayout = () => (
  <>
    <DashboardHeader />
    <Outlet />
  </>
);

const AnganwadiLayout = () => (
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
    element: <MedicalLayout />,
    children: [
      { path: "/MedicalDashboard", element: <MedicalDashboard /> },
    ],
  },
  {
    element: <PatientLayout />,
    children: [
      { path: "/PatientDashboard", element: <PatientDashboard /> },
      { path: "/profile", element: <PatientProfile /> },
      { path: "/health-records", element: <HealthRecords /> },
      { path:"/book-appointment" ,element:<BookAppointment />},
      { path:"/VideoCall" ,element:<VideoCall />},
    ],
  },
  {
    element: <DoctorLayout />,
    children: [
      { path: "/DoctorDashboard", element: <DoctorDashboard /> },
    ],
  },
  {
    element: <AnganwadiLayout />,
    children: [
      { path: "/AnganwadiDashboard", element: <AnganwadiDashboard /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);