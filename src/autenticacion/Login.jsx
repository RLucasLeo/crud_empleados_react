import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    let navegacion = useNavigate();

    // const urlBase = "http://localhost:8080/auth/login" url para pruebas en desarrollo

    const urlBase = "https://crud-empleados-hj05.onrender.com/auth/login" //url en produccion

    const [user, setUser] = useState({
        username:"",
        password:"",
    })

    const {username, password} = user;

    const onInputChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(urlBase, user);
            const token = response.data.token;
            
            localStorage.setItem('authToken', token);

            navegacion('/empleados');
        } catch (error) {
            console.error('Error al autenticar:', error);
        }
    }

  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
                <h2 className="row justify-content-center mt-5">Login</h2>
            <form className="border border-primary border-2 p-4 rounded" onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" id="username" name='username' required={true} value={username} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" name='password' required={true} value={password} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-success">Acceder</button>
                <Link className="btn btn-primary mx-4" to="/registro">Registrarse</Link>
            </form>
            </div>
        </div>
    </div>
  )
}
