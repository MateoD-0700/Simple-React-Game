import { useState } from "react";
const App =() => {

  const [userChoice, setUserChoice] = useState(null)

  const handleClick = (value) =>{
    setUserChoice(value);
  }

  return (
    <div>
      <h1>User choice: </h1>
      <h1>Computer choice: </h1>
      <button onClick={() => handleClick('rock')}>Rock</button>
      <button onClick={() => handleClick('paper')}>Paper</button>
      <button onClick={() => handleClick('scissors')}>Scissors</button>
    </div>
  );
}

export default App;
