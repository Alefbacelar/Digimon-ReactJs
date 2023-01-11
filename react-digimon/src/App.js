import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const Api = () => {
    const [digimon, setDigimon] = useState([]);
    useEffect(() => {
      fetch('https://digimon-api.vercel.app/api/digimon')
      .then((res) => res.json())
      .then((data) => {
        setDigimon(data);
      });
    });
  }


  return (
    <div>
      Olá mundo!
    </div>
  );
}

export default App;
