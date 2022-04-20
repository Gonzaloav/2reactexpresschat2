import Messages from "../components/Messages/Messages";
import SendMessages from "../components/SendMessage/SendMessages";


function viewMessages(datosPadre, loggedIn) {
    return (
        <>
            <div className="mensajeria">
            {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
            {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}  
            
            </div>
        </>
    )

}

export default viewMessages
