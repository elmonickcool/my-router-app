import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
