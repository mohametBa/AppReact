//import logo from './logo.svg';

import Counter from "./pages/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import React, { useState } from "react";
import SimLogin from "./components/SimLogin";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register2";

function App() {
    const [user, setUser] = useState('')


    return (
        <div>
            <Header user={user} />
            <div className='p-3'>
                <Routes>
                    <Route path="/" element={<UserList />}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/login" element={<SimLogin setUser={setUser} />}/>
                    <Route path="/register" element={<Register setUser={setUser} />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
