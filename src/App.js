import "./App.css";
import  React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Register/Login";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./useToken";
function App() {
  const { token, setToken } = useToken();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  // if (!token) {
  //   if (window.location.pathname === "/register") {
  //     console.log(window.location.pathname)
  //     return (
  //       <>
  //         <div>
  //           <ToastContainer />
  //         </div>
  //         <Navbar></Navbar>
  //         <Register setToken={setToken}></Register>
  //         <Footer></Footer>
  //       </>
  //     );
  //   } else if (window.location.pathname === "/login") {
  //     return (
  //       <>
  //         <div>
  //           <ToastContainer />
  //         </div>
  //         <Navbar></Navbar>
  //         <Login setToken={setToken}></Login>
  //         <Footer></Footer>
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <div>
  //         <ToastContainer />
  //       </div>
  //       <Navbar></Navbar>
  //       <Login setToken={setToken} />
  //       <Footer></Footer>
  //     </>
  //   );
  // }
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;