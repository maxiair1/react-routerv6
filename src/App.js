import React from "react";
import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import { HomePage } from './Components/Homepage';
import { About } from './Components/About';
import { Posts } from './Components/Posts';
import { NotFound } from './Components/NotFound';
import { Layout } from './Components/Layout';
import { SinglePage } from './Components/SinglePage';
import { NewPost } from './Components/NewPost';
import { EditPost } from './Components/EditPost';

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <HomePage/> }/>
                    <Route path="about" element={ <About/> }/>
                    <Route path="posts" element={ <Posts/> }/>
                    <Route path="posts/:id" element={ <SinglePage/> }/>
                    <Route path="posts/:id/edit" element={ <EditPost/> }/>
                    <Route path="posts/new" element={ <NewPost/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
