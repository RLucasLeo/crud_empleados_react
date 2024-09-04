import axiosPrivate from '../AxiosPrivate';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {

    // const urlBase = "http://localhost:8080/rh-app/empleados"; url para pruebas en desarrollo

    const urlBase = "https://crud-empleados-hj05.onrender.com/rh-app/empleados" //url en produccion

    let navegacion = useNavigate();

    const[empleado, setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const {nombre, departamento, sueldo} = empleado;
    
    const onInputChange = (e)=>{
        //operador spread "..." (expande los atributos)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axiosPrivate.post(urlBase, empleado);
        navegacion('/');
    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Agregar empleado</h3>
            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre </label>
                    <input type="text" className="form-control" id="nombre" name='nombre' required={true} value={nombre} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="departamento" name="departamento" required={true} value={departamento} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label">Sueldo</label>
                    <input type="number" step="any" className="form-control" id="sueldo" name="sueldo" required={true} value={sueldo} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                    <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
                </div>
            </form>
        </div>
    </div>
  )
}
