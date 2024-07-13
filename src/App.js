import logo from './logo.svg';
import bossmanpng from './bossman.png'
import './App.css';
import { useEffect, useState } from 'react';
import { getBossman } from './api/services/Bossman.js';

function App() {
  const [bossman, setBossman] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBossman = await getBossman();
      setBossman(fetchedBossman);
    }
    fetchData();
  }, [])

  console.log(bossman);

  return (
    <div className="App">
      <header className="App-header">
        <img src={bossmanpng} width={"50%"} alt="logo" />
        <p>
          The CrackMan's Net Worth
        </p>
        {bossman && ( // Only render if bossman exists
          <p>
            {bossman.total_networth_usd ? ( // Access data after confirmation
              <>${bossman.total_networth_usd}</>
            ) : (
              <>Value Not Available</>
            )}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
