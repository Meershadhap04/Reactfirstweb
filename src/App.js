

// function App() {
//   // javascript
//   // console.log('Hello from component')

//   const now = new Date();
//   const a = 10;
//   const b = 20;
  

//   console.log(now, a + b);


//   return (

//     <div>
//       <p>Hello World,it is{now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
  
//   );
// }

// export default App;

import React from 'react';

function Hello(props) {
  return (
    <div>

      <p>Hello {pros.name},you are { props.age } years old!</p>

    </div>
  )
}
function App() {

  const age = 10;
  return (
    <div>

      <h1>Greeting</h1>
      <Hello name='Meer' age={ 10 + 20 } />
      <Hello name='Shadhap' age ={ age }/>
    </div>
  )
}
export default App