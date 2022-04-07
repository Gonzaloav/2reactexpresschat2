import { useState } from 'react';



function Login({result}) {
    
const [usuario, setUsuario] = useState ("");
const [password, setPassword] = useState ("");
const host = "https://web-develop-react-express-chat.herokuapp.com";


async function newUser(url,data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
}
    
function login() {
    let dataToken = {userName: usuario, password:password};
    const data = JSON.stringify (dataToken);
    newUser(host, data);
}


function changePassword(event) {
    setPassword (event.targer.value)
}

function changeUsuario(event) {
    setUsuario (event.targer.value)   
}

 return (
    <>
        <h2> Login Usuario: </h2>

        <input type ="text" value ={usuario} onChange ={changeUsuario}/>
        <span> Usuario </span> <br></br>

        <input type ="text" value ={password} onChange ={changePassword}/>
        <span> Contraseña </span>
        
        <button onClick={login}> Login </button> 
    </>

 )
}

export default Login