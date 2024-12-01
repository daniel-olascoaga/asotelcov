import { Outlet } from "react-router-dom";

//import Header from "./Header/Header";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar/>
      

      <Outlet/>

      <Footer/>
    </>
  )
}