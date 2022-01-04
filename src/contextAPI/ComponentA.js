import { useCounter } from "./CounterContext";
import ComponentB from "./ComponentB";

function ComponentA() {
  const { count } = useCounter();
  return (
    <div style={{ color: "Green" }}>
      <p>Count: {count}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
