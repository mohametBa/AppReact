import axios from 'axios';
import propType from 'prop-type';
import { useCallback } from 'react';
import React from 'react';


function UserProfil(props) {
    const handleClick = useCallback(() => {
        axios.delete('https://jsonplaceholder.typicode.com/users/'+ props.user.id)
        props.deleteUser(props.user.id)
    },[props])

    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF5c2FnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.user.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-flex justify-content-end'>
                <button className='btn btn-primary' onClick={handleClick}>
                    <i className='bi bi-trash3'></i>
                </button>
                </div>
            </div>
        </div >
    );
}

UserProfil.prototype = {
    user: propType.object,
    // deleteUser : propType.func.isRequired,
}

export default UserProfil;