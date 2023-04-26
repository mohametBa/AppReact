import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get('https://data.gouv.nc/api/records/1.0/search/?dataset=liste-des-pays-et-territoires-etrangers&q=&rows=300&facet=libcog&facet=codenum3')
        .then(res =>(setCountries(res.data.records)))
    },[])

    const [name,setName] = useState("")
    const handleName = useCallback((event) => {
        setName(event.target.value);
    },[])

    const [email,setEmail] = useState("")
    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    },[])

    const [country,setCountry] = useState("")
    const handleCountry = useCallback((event) => {
        setCountry(event.target.value);
    },[])

    const [password,setPassword] = useState("")
    const handlePassword = useCallback((event) => {
        setPassword(event.target.value);
    },[])

    const Navigate = useNavigate();

    const handleSubmit = useCallback(
        (event) => {
        try {   
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", {
            name,
            email,
            password,
            country,
        });
        props.setUser(name)

Navigate("/");

    } catch(error){
        console.error(error);
    }},
    [name, email, password, country, Navigate, props])


    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Nom</label>
                    <input type="text" className='form-control' id="label" value={name} onChange={handleName} />
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label htmlFor="Email" className='form-label'>Email</label>
                    <input type="text" className='form-control' id="email" value={email} onChange={handleEmail} />
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label htmlFor="Password" className='form-label'>Mot de passe</label>
                    <input type="password" className='form-control' id="password" value={password} onChange={handlePassword} />
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label htmlFor="country" className='form-label'>Pays</label>
                    <select type="text" className='form-select' id="country" value={country} onChange={handleCountry} >
                        <option value=""></option>
                        {countries.map((country, index) =>
                            <option key={index} value={country.fields.libcog}>
                                {country.fields.libcog}
                            </option>
                        )}
                    </select>
                </div>
                <div className='d-grid gap'>
                    <button className='btn btn-primary btn-expend'>valider</button>
                </div>
            </form>
        </div>
    );
}

export default Register;