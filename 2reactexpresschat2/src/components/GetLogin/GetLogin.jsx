

function GetLogin() {

    let [usuarios, setUsuarios] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    //Funciones para coger usuarios GET
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }



    return (
        <>
            <h2> Cuentas de usuarios </h2>
            <button onClick={dataToHTMLList}>Listado Usuarios</button>
            <ul>{usuarios}</ul>
        </>
    );

}

export default GetLogin;
