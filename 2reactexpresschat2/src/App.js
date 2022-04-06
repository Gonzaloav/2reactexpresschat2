
import './App.css';
import Login from './componets/Login/Login.jsx';


const [password, setPassword] = useState ("");
const [id, setId] = useState ("");




function App() {

function changePassword(event) {
  setPassword (event.targer.value)
}

function changeId(event) {
  setId (event.targer.value)
}


  return (
    <>
        <h1> Chat clase </h1>
        
        <h3> Usuario (Id):</h3>
        <input type ="text" value ={id} onChange ={changeId}/>
        
        <h3> Password:</h3>
        <input type ="text" value ={password} onChange ={changePassword}/>

    
    </>
  );
}

export default App;
