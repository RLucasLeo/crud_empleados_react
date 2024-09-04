import React from 'react'
import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <div className="container">
        <div className="row justify-content-center mt-2">
            <div className="col-md-6 col-lg-4">
                <h2 className="row justify-content-center mt-1">Registrarse</h2>
            <form className="border border-primary border-2 p-4 rounded">
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario*</label>
                <input type="text" className="form-control" id="username" name='username' required={true}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña*</label>
                <input type="password" className="form-control" id="password" name='password' required={true}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="firstname" name='firstname'/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="lastname" name='lastname'/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">País</label>
                <input type="text" className="form-control" id="country" name='country'/>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
                <Link className="btn btn-primary btn-custom mx-4" to="/">Logearse</Link>

            </form>
            </div>
        </div>
</div>
  )
}
