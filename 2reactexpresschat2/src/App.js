import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login.jsx';
import Menssage from './components/Menssage/Menssage';
import SendMessages from './components/SendMenssages/SendMenssages';

function App() {
  
  



  return (
    <>
        <h1> Chat clase </h1>
        <Login/>
        <Menssage/>
        <SendMessages/>
        <getLogin/>
    
    </>
  );
}

export default App;
