import { useCallback, useState } from "react";

const Counter = ({ parentCallback }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
        parentCallback(count + 1);
      }}
    >
      increment
    </button>
  );
};

export default function App() {
  const [count, setCount] = useState(0);

  const callback = useCallback((count) => {
    setCount(count);
  }, []);

  return (
    <div className="App">
      <Counter parentCallback={callback} />
      <h2>count {count}</h2>
    </div>
  );
}