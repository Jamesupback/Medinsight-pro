import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            <Navbar fixed={false}/>
            <Hero />
            <Footer/>
        </>
    );
};

export default Home;
