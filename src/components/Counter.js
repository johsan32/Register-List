import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.users.length);

  useEffect(() => {
    setCount(props.users.length);
  }, [props.users]);

  return (
    <span className="lead border bg-white text-black rounded-5 ms-2 p-2">
      {count}
    </span>
  );
};

export default Counter;
