import React from 'react';
import {useEffect, useState}  from 'react';

function Home(props) {
  const [count, setCount] = useState(0);
  console.log(123);

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
    </div>
  );
}

export default Home;
