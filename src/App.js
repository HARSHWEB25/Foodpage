import logo from './logo.svg';
import './App.css';
import Home from './COMPONET/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import SingleCard from './COMPONET/SingleCard';
import NevBar from './COMPONET/NevBar';
import Notification from './COMPONET/Notificion';
import About from './COMPONET/About';
import Booking from './COMPONET/Booking';



function App() {
  return (
    <>
    <BrowserRouter>
     <NevBar/>
    <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/contact" element={<About/ >} />
            <Route path="/singlecard" element={<SingleCard />} />
           < Route path="/Noti" element={< Notification/>} />
            <Route path="/about" element={<About/ >} />
            <Route path="/booking" element={<Booking/ >} />
            <Route path="/check" element={<Booking/ >} />
            <Route path="/view" element={<Home/ >} />        
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
