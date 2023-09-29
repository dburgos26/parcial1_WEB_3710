import React from 'react';
import { useEffect } from 'react';
import LogIn from './components/LogIn';
import List from './components/List';
import banner from './banner.png';


function App() {

  const [contenido, setContenido] = React.useState(null);

  const handleLogIn = () => {
    setContenido(<List />);
    console.log("Logeado");
  }

  useEffect(() => {
    setContenido(<LogIn handleLogIn={handleLogIn} enter={true} />);
  }
  , []);

  return (
    <div className="App">
      <header
        className="App-header"
      >
        <p> Aroma </p>
        <img src={banner} className="App-logo" alt="logo" />
      </header>
      <div>
        {contenido}
      </div>
    </div>
  );
}

export default App;
