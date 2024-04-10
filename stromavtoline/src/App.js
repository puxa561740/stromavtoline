import Header from "./components/Header/header";
import { Outlet } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/footer";

export default function App() {
  return( 
    <>
      <Header/>
      <main id="main">  
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}