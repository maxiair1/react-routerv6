import React from "react";
import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { HomePage } from './Components/Homepage';
import { About } from './Components/About';
import { Posts, loaderPosts } from './Components/Posts';
import { NotFound } from './Components/NotFound';
import { Layout } from './Components/Layout';
import { loaderPost, PostPage } from './Components/PostPage';
import { NewPost } from './Components/NewPost';
import { EditPost } from './Components/EditPost';
import { LoginPage } from './Components/LoginPage';
import { RequireAuth } from './HOC/RequireAuth';
import { AuthProvider } from './HOC/AuthProvider';
import {ErrorPage} from './Components/ErrorPage';


function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/react-routerv6" element={ <Layout/> }>
            <Route index element={ <HomePage/> }/>
            <Route path="about" element={ <About/> }>
                <Route path="contacts" element={<p>Our contacts</p>}/>
                <Route path="team" element={<p>Our team</p>}/>
            </Route>
            <Route path="about-us" element={ <Navigate to="/about" replace/> }/>
            <Route path="posts" element={ <Posts/> } loader={loaderPosts} errorElement={<ErrorPage/>}/>
            <Route path="posts/:id" element={ <PostPage/> } loader={loaderPost} errorElement={<ErrorPage/>}/>
            <Route path="posts/:id/edit" element={ <EditPost/> }/>
            <Route path="posts/new" element={ <RequireAuth><NewPost/></RequireAuth> }/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="*" element={ <NotFound/> }/>
        </Route>
    )    )
    return (
        <div className="App">
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </div>
    );
}

export default App;