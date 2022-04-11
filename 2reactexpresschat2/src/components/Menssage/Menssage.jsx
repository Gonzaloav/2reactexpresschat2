import { useEffect, useState, } from 'react';

function Message({ id, password }) {

    //const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const token = authToken(id, password);
    const [timer, setTimer] = useState(null);
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    function authToken(id, password) {

        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${password}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }

/* useEffect solo se ejecutará una vez por meter un array vacio */
    useEffect(
        () => {
/**useInterval:primer parametro será una función que queramos que se ejecute 
 * en el tiempo que queramos */
            if ( timer ) clearInterval(timer);
            const timerId = setInterval(()=>getMessage(token), 1000)
            setTimer(timerId)
        },
        [id, password]
    )

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
    function getMessage(token) {
        authGet(host + "/message/", token).then(
            data => setMessage(data.map(
                (item) => <li ><b>Id:</b> {item.source}- <b>Contenido:</b> {item.content}</li>
                
            ))
        )
    }

    return (
        <>
            <h2>Obtener todos los mensajes</h2>
            <p>{token}</p>
            <button onClick={getMessage}>Obtener Mensajes</button>
            <p>{message}</p>
        </>
    );

}

export default Message;