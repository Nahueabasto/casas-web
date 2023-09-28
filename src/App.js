import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import './App.css';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Gracias from './pages/Gracias';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} /> 
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/gracias" component={Gracias} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
