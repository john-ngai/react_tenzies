import { useState } from 'react';
import Die from "./components/Die";

export default function App() {
  // Return an array of 10 random numbers between 1-6 inclusive.
  const allNewDies = () => {
    const newDies = [];
    for (let count = 1; count <= 10; count++) {
      newDies.push(Math.ceil(Math.random() * 6));
    }
    return newDies;
  }

  const rollDies = () => setDies(allNewDies());
  
  const [dies, setDies] = useState(allNewDies());

  const dieElements = dies.map(dice => <Die value={dice} />);

  return (
    <main>
      <div className="container--dies">
        {dieElements}
      </div>

      <button className='button--roll'
        onClick={rollDies}
      >Roll</button>
    </main>
  );
}