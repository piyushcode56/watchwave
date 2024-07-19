import React from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";

import SignUp from "./Pages/SignUp/SignUp";
import MovieList from "./component/MovieList/MovieList";
import MovieId from "./component/MovieId/MovieId";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
      <Route path="/watchwave" element={<Home/>}/>
      <Route path="watchwave/movie/:id" element={<MovieId/>}/>
      <Route path="movies/:type" element={<MovieList/>}/>
      <Route path="/movie/:id" element={<MovieId/>}/>
      <Route path="/search/movie" element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
