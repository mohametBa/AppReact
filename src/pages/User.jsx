import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserProfil from '../components/UserProfil';

function User(props) {
    const {id} = useParams();
    const [user , setUser] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(result => setUser(result.data))
    },[id])
    return (
        <div>
            {user.name}
            <UserProfil user={user} complete ></UserProfil>
        </div>
    );
}

export default User;