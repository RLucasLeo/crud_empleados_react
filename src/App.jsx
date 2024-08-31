import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoEmpleados from './empleados/ListadoEmpleados';
import Navegacion from './plantillas/Navegacion';

function App() {

  return (
    <div className='container'>
    <Navegacion/>
    <ListadoEmpleados/>
      </div>);
}

export default App
