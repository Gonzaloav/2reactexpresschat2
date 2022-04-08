import { useState } from 'react';



function Menssage({id, password}) {
    
const [menssage, setMenssage] = useState ("");
const token = authToken (id, password);
const host = "https://web-develop-react-express-chat.herokuapp.com";


function authToken(id, password) {

    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${password}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}

async function authGet(url, token) {
    const response = await fetch(
        url,
        {
            headers: {
                Authorization: token
            }
        }
    );
    const data = await response.json();
    return data;
}

function getMessage() {
    authGet(host+"/messages/", token);
}

return (
    <>
        <h2> Contenido Mensaje:</h2>
        <button onClick={getMessage}> Recibir Mensajes</button>
    </>
)
  
}
export default Menssage