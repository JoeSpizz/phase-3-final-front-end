
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Fleets from './components/Fleets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/fleets" element={<Fleets />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
