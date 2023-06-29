import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
    const [progress, setProgress] = useState(0);
    const pageSize = 15;

    const apiKey = process.env.REACT_APP_NEWS_API;

    return (
        <>
            <BrowserRouter>
                <Navbar LoadingBar={<LoadingBar color="#f11946" height={3} progress={progress} />} />
                <Routes>
                    <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={pageSize} country="in" category="general" />} />
                    <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
                    <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
                    <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />
                    <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />
                    <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />
                    <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />
                    <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
