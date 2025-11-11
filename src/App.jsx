import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();
  useEffect(() => {

    

  }, [])

  return (
    <div>
      <Header />
      <ToastContainer />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
