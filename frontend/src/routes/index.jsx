import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "../Dashboard/index";
import Landing from "../Pages/Landing";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

export default routes;
