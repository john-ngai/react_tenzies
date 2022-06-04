import { useState } from 'react';
import Die from "./components/Die";

export default function App() {
  // Return an array of 10 objects containing random values between 1-6 inclusive.
  const allNewDies = () => {
    const newDies = [];
    const getRandomNumber = max => Math.ceil(Math.random() * max)
    for (let count = 1; count <= 10; count++) {
      newDies.push({
        id: count,
        value: getRandomNumber(6),
        isHeld: false
      });
    }
    return newDies;
  }
  
  const [dies, setDies] = useState(allNewDies());

  const rollDies = () => setDies(allNewDies());

  const holdDice = id => setDies(oldDies => oldDies.map(dice => {
    return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
  }));
  
  const dieElements = dies.map(dice => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

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