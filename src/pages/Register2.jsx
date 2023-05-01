import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import propType from 'prop-type';
import * as Yup from 'yup';




function Register(props) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get('https://data.gouv.nc/api/records/1.0/search/?dataset=liste-des-pays-et-territoires-etrangers&q=&rows=300&facet=libcog&facet=codenum3')
        .then(res =>(setCountries(res.data.records)))
    },[])
// Formulaire avant firmik
    // const [name,setName] = useState("")
    // const handleName = useCallback((event) => {
    //     setName(event.target.value);
    // },[])

    // const [email,setEmail] = useState("")
    // const handleEmail = useCallback((event) => {
    //     setEmail(event.target.value);
    // },[])

    // const [country,setCountry] = useState("")
    // const handleCountry = useCallback((event) => {
    //     setCountry(event.target.value);
    // },[])

    // const [password,setPassword] = useState("")
    // const handlePassword = useCallback((event) => {
    //     setPassword(event.target.value);
    // },[])



    const Navigate = useNavigate();

return (
<div>
    <h1>Inscription avec formik</h1>
        <Formik 
            initialValues={{ name: '',email: '', password: '', country: '' }}
            
            validationSchema = {Yup.object({
                name: Yup.string()
                .required('Un nom est nécessaire')
                .min(2, 'Votre doit comporter au moins 2 caractéres')
                .max(50,'votre nom doit comporter moins de 50 caractéres'),
                email: Yup.string()
                .email('Entrer un email valide'),
                password: Yup.string()
                .required('VOTRE MOT DE PASSE DOIT COMPORTER 8 CARACTERES')
                .min(8,'min 8 caracteres'),
                country: Yup.string().required('Un pays est nécessaire')
            })

            }

            onSubmit={async (values, { setSubmitting }) => {
            try {   
                const {name,email,password,country} = values; 
                await  axios.post("https://jsonplaceholder.typicode.com/users", {
                    name,
                    email,
                    password,
                    country
                });
            setSubmitting(false)
            Navigate("/");
            props.setUser(name)
                } catch(error){
                    console.error(error);
                    setSubmitting(false)
                }
    }}
        >
    {({ isSubmitting }) => (
    <Form>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Nom</label>
            <Field type="text" className='form-control' id="label" name="name"/>
            <ErrorMessage name='name' component="div" className='alert alert-warning' ></ErrorMessage>
        </div>
        <div className="mb-3">
            <label htmlFor="Email" className='form-label'>Email</label>
            <Field className='form-control' id="email" name="email" />
            <ErrorMessage name='email' component="div" className='alert alert-warning' ></ErrorMessage>
        </div>
        <div className="mb-3">
            <label htmlFor="Password" className='form-label'>Mot de passe</label>
            <Field type="password" className='form-control' id="password" name="password" />
            <ErrorMessage name='password' component="div" className='alert alert-warning' ></ErrorMessage>
        </div>
        <div className="mb-3">
            <label htmlFor="country" className='form-label'>Pays</label>
            <Field component="select" type="text" className='form-select' id="country" name="country" >
            <ErrorMessage name='country' component="div" className='alert alert-warning' ></ErrorMessage>
                <option value=""></option>
                {countries.map((country, index) => 
                    <option key={index} value={country.fields.libcog}>
                        {country.fields.libcog}
                    </option>
                )}
            </Field>
        </div>
        <div className='d-grid gap'>
            <button className='btn btn-primary btn-expend'disabled = {isSubmitting} >
                valider
            </button>
        </div>
    </Form>
    )}
    </Formik>
    </div>
    );
                }
export default Register;