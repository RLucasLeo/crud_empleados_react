import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoEmpleados from './empleados/ListadoEmpleados';
import Navegacion from './plantillas/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarEmpleado from './plantillas/AgregarEmpleado';

function App() {

  return (
    <div className='container'>
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route exact path='/' element={<ListadoEmpleados/>}/>
        <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
      </Routes>
    </BrowserRouter>
      </div>);
}

export default App
