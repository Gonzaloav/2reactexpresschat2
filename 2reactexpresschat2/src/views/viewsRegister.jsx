import GetLogin from "../components/GetLogin/GetLogin"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"


function viewRegister(setDatosPadre, loginHandler) {
    return (
         <div>
                <Register parentSetter={setDatosPadre} /><button onClick={loginHandler}>Registro</button>
         </div>
        
    )

}

export default viewRegister