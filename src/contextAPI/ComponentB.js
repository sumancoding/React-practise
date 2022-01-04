import { useCounter } from "./CounterContext";

function ComponentB() {
  const { increaseCount, decreaseCount } = useCounter();
  return (
    <>
      <div style={{ color: "Green" }}>
        {" "}
        <button onClick={increaseCount}> Increase Count</button>{" "}
      </div>
      <div style={{ color: "Red" }}>
        {" "}
        <button onClick={increaseCount}> Increase Count</button>{" "}
      </div>
    </>
  );
}

export default ComponentB;
