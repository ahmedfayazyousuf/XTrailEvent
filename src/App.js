import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import Home from './components/Home';
import Instruction from './components/Instruction';
import QRScan from './components/QRScan';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Instructions" element={<Instruction />} />
          <Route exact path="/QRScan" element={<QRScan />} />
          <Route exact path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
