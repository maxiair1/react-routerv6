import React from "react";
import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import {HomePage} from './Components/Homepage';
import {About} from './Components/About';
import {Posts} from './Components/Posts';
import {NotFound} from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="App-link">Home</Link>
        <Link to="/about" className="App-link">About</Link>
        <Link to="/posts" className="App-link">Posts</Link>
      </header>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
