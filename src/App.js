// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Film from './Film';

function App() {

  const [kinoData, setKinoData] = useState({})
  const getData = async () => {
    let config = {
      headers: {
        'X-API-KEY': 'YYAGP6H-P39MB8P-QZJM5B0-FGMKHB7',
      }
    }
    let resp = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/random`, config);
    setKinoData({})
    setKinoData(resp.data)

  }
  console.log('get kinoData', kinoData);
  const emptyOrder = Object.keys(kinoData).length !== 0
  console.log('emptyOrder', Object.keys(kinoData).length);
  console.log('render');
  // getData()

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"   
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button onClick={getData}>GetData</button>

        {emptyOrder ? (<Film FilmData={kinoData} />) : (<p>нет данных</p>)}

      </header>
    </div>
  );
}

export default App;
