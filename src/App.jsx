//import logo from './logo.svg';

import Counter from "./pages/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import User from "./pages/User";
import React, { useState } from "react";
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register2";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";

function App() {
    const [user, setUser] = useState('')


    return (
        <div>
            <Header user={user} />
            <div className='p-3'>
                <Routes>
                    <Route path="/" element={<UserList />}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/login" element={<Login setUser={setUser} />}/>
                    <Route path="/register" element={<Register setUser={setUser} />}/>
                    <Route path="/posts/:id" element={<Post/>} />
                    <Route path="/users/:id" element={<User/>} />
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
