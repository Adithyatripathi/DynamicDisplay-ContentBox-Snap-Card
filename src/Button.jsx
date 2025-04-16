import { useState } from "react";

function Button() {
  const [clickCount, setClickCount] = useState(0); // track number of clicks

  const handleClick = () => {
    setClickCount(clickCount + 1); // increase count each time
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        {clickCount === 0 ? "Click me!!" : `You've clicked ${clickCount} times`}
      </button>
    </>
  );
}

export default Button;
