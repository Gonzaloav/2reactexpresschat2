

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
            <h2>Conseguir cuentas de usuario</h2>
            <button onClick={dataToHTMLList}>Listado usuarios</button>
            <ul>{usuarios}</ul>
        </>
    );

}

export default GetLogin;
