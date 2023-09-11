import React from 'react';
import './App.css';
import MainPage from "./Pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./Pages/PostPage";


const Router = BrowserRouter;

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post/:id" element={<PostPage />} />
        </Routes>
    </Router>
  );
}

export default App;
