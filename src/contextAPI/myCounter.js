import { useCounter } from "./CounterContext";

function MyCounter() {
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <div>
      <h3>Counter Component</h3>
      <button onClick={increaseCount}> Increase Count </button> <br />
      <br />
      <button onClick={decreaseCount}> Decrease Count </button>
    </div>
  );
}

export default MyCounter;
