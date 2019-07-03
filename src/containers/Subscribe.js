import React, { useState } from 'react';

const Subscribe = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const handleClick = () => setToggleOn(!toggleOn);

  return (
    <button onClick={handleClick} className="btn bold">
      {toggleOn ? 'Unsubscribe' : 'Subscribe'}
    </button>
  );
};

export default Subscribe;
