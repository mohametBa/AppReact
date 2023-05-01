import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const fakeAxios = {
    post: (url,data) => {
        if(url ==='/api/login') {
            if(
              data.login === "monlogin"  && data.password === "monpassword"
            ){
                return Promise.revolve({
                    status : 200,
                    data : {token : "XXX.yyy.zzz"},
                })
            }
        } else {
            return axios.post(url,data)
        }
    }
}

function Login() {
    const [authError, setAuthError] = useState("")
    return (
        <div>
            <h1 className='text-center' >Connexion</h1>
            {authError && <div className="alert alert-danger">{authError}</div>}
            <Formik 
            initialValues={{ identifiant: '', password: ''}}
            
            validationSchema = {Yup.object({
                login: Yup.string()
                    .required('Vos identifiants')
                    .min(4, 'Votre doit comporter au moins 4 caractéres'),
                password: Yup.string()
                    .required('VOTRE MOT DE PASSE DOIT COMPORTER 8 CARACTERES')
                    .min(8,'min 8 caracteres'),
            })

            }

            onSubmit={async ({login, password}) => {
                try {
                    const response = await  axios.post('api/login', {
                    login,
                    password,
                    });
                        axios.defaults.headers.common['Authorization'] = `Bearer: ${response.data.token}`;
                }catch(error){
                    if(error.status === 401 ){
                        setAuthError('login ou mot de passe incorrect')
                    }else {
                        setAuthError(error.message)
                    }
                    console.error(error);
                }
                }}
        >
            {({ isSubmitting }) => (
    <Form>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Identifiant</label>
            <Field type="text" className='form-control' id="label" name="login"/>
            <ErrorMessage name='login' component="div" className='alert alert-warning' ></ErrorMessage>
        </div>
        <div className="mb-3">
            <label htmlFor="Password" className='form-label'>Mot de passe</label>
            <Field type="password" className='form-control' id="password" name="password" />
            <ErrorMessage name='password' component="div" className='alert alert-warning' ></ErrorMessage>
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

export default Login;