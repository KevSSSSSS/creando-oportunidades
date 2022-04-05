import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg' className="App-logo" alt="logo" />
        <p>
          Hola soy Messi! Prueba nuestra aplicacion Conectando Oportunidades
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Susi es crack
        </a>
        <perfil/>
      </header>
    </div>
  );
}

export default App;
