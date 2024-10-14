// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
// import Mom from "./components/Mom";
import Navbar from "./components/Navbar";
import Sobay from "./components/Sobay";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Sobay />
      <Gallery />
      <Footer />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/members" element={<Sobay />}></Route>{" "}
          <Route path="/gallery" element={<Gallery />}></Route>{" "}
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
