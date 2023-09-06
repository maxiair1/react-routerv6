import React from "react";
import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from './Components/Homepage';
import { About } from './Components/About';
import { Posts } from './Components/Posts';
import { NotFound } from './Components/NotFound';
import { Layout } from './Components/Layout';
import { PostPage } from './Components/PostPage';
import { NewPost } from './Components/NewPost';
import { EditPost } from './Components/EditPost';
import { LoginPage } from './Components/LoginPage';
import { RequireAuth } from './Hoc/RequireAuth';
import { AuthProvider } from './Hoc/AuthProvider';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Layout/> }>
                        <Route index element={ <HomePage/> }/>
                        <Route path="about" element={ <About/> }/>
                        <Route path="about-us" element={ <Navigate to="/about" replace/> }/>
                        <Route path="posts" element={ <Posts/> }/>
                        <Route path="posts/:id" element={ <PostPage/> }/>
                        <Route path="posts/:id/edit" element={ <EditPost/> }/>
                        <Route path="posts/new" element={ <RequireAuth><NewPost/></RequireAuth> }/>
                        <Route path="login" element={ <LoginPage/> }/>
                        <Route path="*" element={ <NotFound/> }/>
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
