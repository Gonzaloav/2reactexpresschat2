import { useState } from 'react';
import './App.css';


const [usuario, setUsuario] = useState ("");
const [password, setPassword] = useState ("");
const host = "https://web-develop-react-express-chat.herokuapp.com";
const data = {"userName":"Marias", "password":"abc123"}

async function post(host, data) {
    const response = await fetch(
        host,"/login/"
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
   
}


export default Login