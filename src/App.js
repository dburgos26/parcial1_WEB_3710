import React from 'react';
import { useEffect } from 'react';
import LogIn from './components/LogIn';
import List from './components/List';
import banner from './banner.png';
import './App.css';
import { FormattedMessage } from 'react-intl';


function App() {

  const [contenido, setContenido] = React.useState(null);

  const handleLogIn = () => {
    setContenido(<List />);
  }

  useEffect(() => {
    setContenido(<LogIn handleLogIn={handleLogIn} />);
    //setContenido(<List />);
  }
    , []);

  return (
    <div className="App">
      <div className="Titulo">
        <span className="Texto">El aroma mágico</span>
      </div>
      <header className="App-header">
        <div className="App-divider"></div>
        <br />
        <img src={banner} className="App-logo" alt="logo" />
        <br />
        <div className="App-divider"></div>
      </header>
      <div>
        {contenido}
      </div>
      <footer >
      <FormattedMessage id='Contact' />: +57 3102105253 - info@elaromamagico.com - @elaromamagico
      </footer>
    </div>
  );
}

export default App; 
