import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return <main className="count">{count}</main>;
};

const Application = () => <Counter />;

export default Application;
