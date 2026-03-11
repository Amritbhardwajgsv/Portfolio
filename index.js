import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Header from "./src/Components/header";
import Navbar from "./src/Components/navbar";
import About from "./src/Components/about";
import Experience from "./src/Components/experience";
import Stack from "./src/Components/stack";
import Projects from "./src/Components/project";
import Achievements from "./src/Components/achievement";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/stack" element={<Stack/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/achievements" element={<Achievements/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);