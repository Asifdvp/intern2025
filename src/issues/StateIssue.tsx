import { useState } from "react";

export function StateIssue() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const increaseAsync = () => {
    setTimeout(() => {
      setCount(count + 1);
      //Duzgun versiya
      // setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  return (
    <div>
      <h3>Wrong Counter: {count}</h3>
      <button onClick={increase}>Increment </button>
      {/* // Problemli versiya Bir defe increaseASync click edib ardinca 5 defe increase edende
    // count 5 artacaq, amma 2 saniyeden sonra 1 artacaq son deyer 1 olacaq */}
      <button onClick={increaseAsync}>Increment Async</button>
    </div>
  );
}
