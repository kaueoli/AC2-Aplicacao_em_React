import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import OfertasPassagens from './OfertasPassagens';
import Sobre from './Sobre';
import './style.css'

function App() {
  return (
      <>
      <header className="App-header">
        <p><Link to='/home'>Home</Link></p>
        <p><Link to='/ofertas/passagens'>Ofertas de Passagens Aéreas</Link></p>
        <p><Link to='/sobre'>Sobre</Link></p>
      </header>
      <main>
        <Switch>
          <Route path='/home' component= {Home}/>
          <Route path='/ofertas/passagens' component= {OfertasPassagens}/>
          <Route path ='/sobre' component= {Sobre} />
        </Switch>
      </main>
      </>

  );
}

export default App;
