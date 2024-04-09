import Header from "./components/Header/header";
import { Outlet } from "react-router-dom";
import './App.css';

export default function App() {
  return( 
    <>
      <header>
        <Header/>
      </header>
      <main>
        <div>
          <Outlet/>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}