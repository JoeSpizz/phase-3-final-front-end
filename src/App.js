
import './index.css';
import './components/fonts/StarJedi-DGRW.ttf'
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Fleets from './components/Fleets';
import {useState} from "react";
import Ships from './components/Ships';
import Battles from './components/Battles';

function App() {
  const [commander, setCommander] = useState(null)
  const [newShip, setNewShip] = useState(0)
  function login(user){
    user ? <Navigate replace to="/Fleets" /> : alert("No Commander with that name exists. Please Create a new Profile or correct your spelling")
    setCommander(user.name)
}

function addShip(e){
e.preventDefault()
setNewShip(e.target.name)
}

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={commander ? <Navigate to="/fleets" /> : <Login login={login}/>} />
        <Route exact path="/fleets" element={<Fleets commander={commander} newShip={newShip}/>} />
        <Route exact path="/ships" element={<Ships commander={commander} addShip={addShip}/>} />
        <Route exact path="/battles" element={<Battles commander={commander}/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
