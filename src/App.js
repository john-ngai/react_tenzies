import { useEffect, useState } from 'react';
import Die from "./components/Die";
import Confetti from 'react-confetti';

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

  // States
  const [dies, setDies] = useState(allNewDies());
  const [tenzies, setTenzies] = useState(false);

  // setTenzies(true) if all dies are held and are the same value.
  useEffect(() => {
    const referenceValue = dies[0].value;
    const sameValue = dies.every(dice => dice.value === referenceValue);

    const isHeld = dies.every(dice => dice.isHeld === true);
    
    if (isHeld && sameValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [dies]);

  // Only roll the dies that aren't being held (i.e., isHeld = false).
  const rollDies = () => setDies(oldDies => oldDies.map(dice => {
    return dice.isHeld ? dice : { ...dice, value: getRandomNumber(6) };
  }));


  // Change the state of isHeld to the opposite boolean.
  const holdDice = id => setDies(oldDies => oldDies.map(dice => {
    return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
  }));

  // Create instances of the Die component.
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
      {tenzies && <Confetti width={320} height={320} />}

      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it 
        at its current value between rolls.
      </p>

      <div className='container--dies'>
        {dieElements}
      </div>

      <button className='button--roll'
        onClick={rollDies}
        >
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}