import React, { useCallback, useEffect, useState } from 'react';
import UserProfil from '../components/UserProfil';
import axios from 'axios'


function UserList(props) {
// const users = [
//     'Eva','Aude','Mark','Momo'
// ]

const [users,setUsers] = useState([])

useEffect(() =>{
    //version fetch
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(result => setUsers(result))

    //version axios
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(result => setUsers(result.data));
},[])

const [searchCriteria,setCriteria] = useState('')

const [filteredUsers, setFilteredUsers] = useState([])

const handleSearch = useCallback((event) => {
    setCriteria(event.target.value)
},[])

useEffect(() => {
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(searchCriteria.toLowerCase())))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchCriteria, users])

const deleteUser = useCallback((userId) =>{
   setUsers(users.filter(user => user.id !== userId))
},[users])

    return (
            <div className='container'>
                <h1>Liste des users</h1>
                <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
                <div className='row mt-3'>
                    <div className='col-lg-3 col-md-4 col-xs-6 mb-3'>
                        <input type="text" className='form-control' placeholder='Nouvel utilusateur' />
                    </div>
                    <div className='col-lg-3 col-md-4 col-xs-6 mb-3'>
                        <button className='btn btn-primary float-end' >Créer</button>
                    </div>
                </div>
            <div className='container'>
                <div className='row mt-3'>
                    {filteredUsers.map((user, i) =>
                        <div key={i} className="col-lg-3 col-md-4 col-xs-6 mb-3">
                            <UserProfil user={user} deleteUser = {deleteUser} />
                        </div>
                    )}
                    <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;