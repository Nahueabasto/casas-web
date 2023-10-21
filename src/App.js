import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Gracias from './pages/Gracias';
import CasasEnAlquiler from './pages/CasasEnAlquiler';
import Servicios from './pages/Servicios';
import DetalleCasa from './pages/DetalleCasa';

function App() {
  
  return (
    <BrowserRouter>
    {/* <div className="App">  */}
    <Switch>
      <Route exact path="/" component={Inicio} /> 
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/gracias" component={Gracias} />
      <Route exact path="/casasenalquiler" component={CasasEnAlquiler} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/casa/:id" component={DetalleCasa} />
    </Switch>
    {/* </div> */}
    </BrowserRouter>
  );
}


export default App;
