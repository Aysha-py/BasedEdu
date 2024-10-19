import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "../Dashboard/index";
import Landing from "../Pages/Landing";
import Dashboard from "../Dashboard/components/Dashboard";
import Profile from "../Dashboard/components/Profile";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);

export default routes;
