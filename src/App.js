
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Fleets from './components/Fleets';
import {useState} from "react";

function App() {
  const [commander, setCommander] = useState(null)
  function login(user){
    setCommander(user)
}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={commander ? <Navigate to="/fleets" /> : <Login login={login}/>} />
        <Route exact path="/fleets" element={<Fleets commander={commander}/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
