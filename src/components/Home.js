import React from 'react';
import {useEffect, useState}  from 'react';
import Count from './Count';

function Home(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect')
  });

  const onClick = () => {
    debugger;
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click!</button>

      <Count />
    </div>
  );
}

export default Home;
