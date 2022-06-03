import Die from "./components/Die";

// Return an array of 10 random numbers between 1-6 inclusive.
const allNewDice = () => {
  const newDice = [];
  for (let count = 1; count <= 10; count++) {
    newDice.push(Math.ceil(Math.random() * 6));
  }
  return newDice;
}

export default function App() {
  return (
    <main>
      <div className="container--dies">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  );
}