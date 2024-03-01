import React, {ReactElement} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function AnimatedRoutes(): ReactElement {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    )
}