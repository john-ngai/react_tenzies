import { useState } from 'react';
import Die from "./components/Die";

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

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

  const holdDice = id => console.log(id);
  
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