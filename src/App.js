// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     // JSX
//     // Attributes -> Props
//     // Element
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
// const user = {
//   firstName : 'Minh', 
//   lastName: 'Kha',
//   email: 'khaminh@km.com',
// }

function getFullName(firstName, lastName) {

  return firstName + ' ' + lastName;
}



function User(props){
  const user = props.user
  
  const element = (
    <div>
      <div>{getFullName(user.firstName, user.lastName)}</div>
      <div style={{color: user.email ? 'blue' : 'red' , fontStyle: user.email ? 'initial' : 'italic'}}> {user.email || 'email not found'} </div>
    </div>
  )
  return element;
}
// const checkEmail = (email) =>{
//   if (user.email === '' )
//    return <div>Null</div>
//   return <div style={{color : 'silver', fontSize: '20px'}}>{email}</div>
// }

const users = [
  {
    firstName : 'Minh', 
    lastName: 'Kha',
    email: 'khaminh@km.com',
  },
  {
  firstName : 'Minh', 
  lastName: 'Minh',
  email: 'minhminh@km.com',
  },
  {
  firstName : 'haha', 
  lastName: 'kkk',
  email: '',
  },
]

function App(){
  const element = users.map(user => {
    return <User
    user={user}
    />
  })
  
  return element
}
// const User = () => {
//   const element = (
//     <div>
//       <div>{getFullName(user.firstName, user.lastName)}</div>
//       <div style={{color : 'silver', fontSize: '20px'}}>{getEmail(user.email)}</div>
//     </div>
//   )
//   return element;
// }

export default App;




