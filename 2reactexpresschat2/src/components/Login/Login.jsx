import { useState } from 'react';
import './App.css';


const [usuario, setUsuario] = useState ("");
const [password, setPassword] = useState ("");
const host = "https://web-develop-react-express-chat.herokuapp.com";
const data = {"userName":"Marias", "password":"abc123"}

async function post(url, data) {
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


export default Login