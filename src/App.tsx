import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Greet2 from './components/Greet2';
import Button from './components/Button';
import Styleprop from './components/Styleprop';
import Input from './components/Input';
import PersonName from './components/PersonName';
import { FullName } from './components/Exporttypes.types'
import LoggedIn from './components/state/LoggedIn';
import Usereduce from './components/state/Usereduce';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { MutableREf } from './components/ref/MutableREf';
import { PrivateF } from './components/PassingComp/PrivateF';
import { Profile } from './components/PassingComp/Profile';
import { List } from './components/generic/List';
import { RandomNumber } from './components/restrictions/RandomNumber';

import { Buttons } from './components/WrappingHTML/Buttons';
import { Inputss } from './components/WrappingHTML/Inputss';
function App() {
  const arr=[10,20,30];
  const [count,setCount]=useState(0);
  const [input,setInput]=useState('');
  
  const ArrofObj=[
    {
      first:'kamal',
      last:'hassan'
    },
    {
      first:'rajini',
      last:'kanth'
    }
  ]

  const name = {
    first: 'first',
    last: 'last',
  }
//we need to specify the type of props possing in everwhere..
  const handle=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value);
  }
  // const name:{
  //   first:"dfdf",
  //   last:"sdfdf"
  // }

  return (
    <div className="App">
      {/* <Greet name='Vishal'
       age={10}     
      isLoggedIn={false}
       personName={{first:'kamal',last:'hassan'}} 
       numArr={arr} 
       ObjArray={ArrofObj}>
        I AM GREET CHILDREN
        <Greet2 />
       </Greet> */}

       {/* CONTAINS NO PARAMETER AND DOESNOT RETURN ANYTHING */}
    {/* <Button handleClick={()=>console.log("button was clicked!")}></Button>   */}
    {/* <Button handleClick2={(event,id)=>console.log("button was clicked!",event,id)}></Button>  
    <Button handleClick2={(event,id)=>{
      setCount(prev=>prev+1);
      console.log("Button was clicked ,",count);
      
       
    }}></Button> */}
    
    {/* <Input value={input} handleChange={(event)=>{handle(event)}}></Input> */}

   {/* <Usereduce></Usereduce> */}
{/* 
    <Styleprop styles={{color:'red'}}></Styleprop>
    <LoggedIn></LoggedIn>
      <PersonName names={{first:"John",last:"Cena"}} /> */}

     {/* <ThemeContextProvider>
      <Box />
      </ThemeContextProvider>
     
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableREf></MutableREf> */}
  <Buttons variant="primary" onClick={()=>console.log("clicked")
  }>
    gjhgjg
  </Buttons>


<List list={["dss","sdfd","fdfds"]} printItem={(value)=>console.log(value)
}/>

      <PrivateF isLoggedIn={true} Component={Profile}/>
      {/* //PASSING COMPONENT */}

      <RandomNumber value={-10}  isNegative></RandomNumber>

      
  <Inputss onChange={()=>console.log("fd")
  }>
  Input name
  </Inputss>
    </div>

   
   

    
  );
}

export default App;
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}