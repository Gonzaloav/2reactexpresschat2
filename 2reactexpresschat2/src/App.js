import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login.jsx';
import SendMessages from './components/SendMenssages/SendMenssages';
import Register from './components/Register/Register'
import Messages from './components/Menssage/Menssage';
function App() {
  
  // Ocultar componente
  const [ loggedIn, setloggedIn ] = useState(false);

  // Pasar al padre la contraseña y el usuario.
  const [ datosPadre, setDatosPadre ] = useState("");


function loginHandler() {
  setloggedIn(true);
}
//  Ocultar datos del padre, Menssages y SendMenssages linea 28 y 29  {loggedIn ?...Con operador condiciional
  return (
    <>
        <h1> Chat clase </h1>
        <Login/>
        <getLogin/>
        <Register parentSetter={setDatosPadre}/><br />
      <button onClick={loginHandler}>Register</button>
  
      {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
      {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}  
    </>
  );
}

/**  Operador ternario = {loggedIn ? <Messages id={datosPadre.id} password={datosPadre.password} /> :
 *   <SendMessages id={datosPadre.id} password={datosPadre.password} /> } 
*/
 
 
export default App;
