import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./pages/Home.js";
import PrivateRoute from "./pages/PrivateRoute.js";
import Navbar from "./compnents/Navbar.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
