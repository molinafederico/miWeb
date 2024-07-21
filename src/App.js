
import { Route, Routes } from 'react-router-dom';
import MenuNav from './componentes/MenuNav';
import Home from './componentes/home';
import Proyectos from './componentes/proyrctos';
import Servicios from './componentes/servicios';
import Contacto from './componentes/contacto';


function App() {
  return (
    <div className="">
   <Routes>
    <Route path='/' element={<MenuNav/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/proyectos' element={<Proyectos/>}></Route>
      <Route path='/Servicios' element={<Servicios/>}></Route>
      <Route path='*' element={<Contacto/>}></Route>
    </Route>
   </Routes>

    </div>
  );
}

export default App;
