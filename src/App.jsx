import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoEmpleados from './empleados/ListadoEmpleados';
import Navegacion from './plantillas/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarEmpleado from './plantillas/AgregarEmpleado';
import EditarEmpleado from './empleados/EditarEmpleado';
import Login from './autenticacion/Login';
import Registro from './autenticacion/Registro';

function App() {

  return (
    <div className='container'>
    <BrowserRouter>
        {location.pathname !== '/' || location.pathname !== '/registro' && <Navegacion/>}
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/empleados' element={<ListadoEmpleados/>}/>
        <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
        <Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
      </Routes>
    </BrowserRouter>
      </div>);
}

export default App
