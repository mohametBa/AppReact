//import logo from './logo.svg';

import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import React , {useState} from "react";
import SimLogin from "./components/SimLogin";
// import { Routes } from "react-router-dom";

function App() {
    const [user, setUser] = useState('')


    return (
        <div>
            <Header user={user} />
            <SimLogin setUser={setUser} />
            <div className='p-3'>
                <Counter />
                <UserList />
            </div>
        </div>
    );
}

export default App;
