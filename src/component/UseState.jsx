import React, { useState } from 'react';
const UseState = () => {
  const [name, setname] = useState('Isha');
  return (
    <div>
      <p>{name} </p>
      <button onClick={() => setname(name + " Kunwar")}>
        Last Name
      </button>
    </div>
  )
}

export default UseState

// import React, { useState } from 'react';

// function  Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Counter

