import { useEffect, useState, } from 'react';

function Register({ parentSetter }) {

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");

    function changeIdHandler(ev) {
        setId(ev.target.value)
    }

    function changePasswordHandler(ev) {
        setPassword(ev.target.value);
    }

    // Pasar al padre la contraseña y el usuario.
    
    useEffect(
        ()=>{
            parentSetter({
                id: id,
                password: password
            })
        },
        [id,password]
    )
    
    return (
    <>
        <h2>Registro</h2>
        <input value={id} onChange={changeIdHandler} placeholder="Id"/><br/>
        <input type="password" value={password} onChange={changePasswordHandler} placeholder="Password"/>
    </>
    );
}

export default Register;
