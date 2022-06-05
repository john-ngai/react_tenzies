import { useState } from 'react';
import Die from "./components/Die";

export default function App() {
  const getRandomNumber = max => Math.ceil(Math.random() * max);

  // Return an array of 10 objects containing random values between 1-6 inclusive.
  const allNewDies = () => {
    const newDies = [];
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

  // Only roll the dies that aren't being held (i.e., isHeld = false).
  const rollDies = () => setDies(oldDies => oldDies.map(dice => {
    return dice.isHeld ? dice : { ...dice, value: getRandomNumber(6) };
  }));


  // Change the state of isHeld to the opposite boolean.
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="container--dies">
        {dieElements}
      </div>

      <button className='button--roll'
        onClick={rollDies}
      >Roll</button>
    </main>
  );
}