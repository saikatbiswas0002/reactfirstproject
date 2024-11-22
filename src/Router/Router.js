import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../ShareModule/Header/Header";
import Footer from "../ShareModule/Footer/Footer";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import CardDetails from "../Components/Card/Card";
// import Homecard from "../Components/Home/Homecard/Homecard";


let Rout = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/viewmore/:id" element={<CardDetails/>}/>
                </Routes>
                {/* <Homecard/> */}
                <Footer/>
            </Router>
        </>
    )
};

export default Rout;