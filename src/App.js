import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import Instruction from './components/Instruction';
import UploadImage from './components/UploadImage';
import QRScan from './components/QRScan';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Instructions" element={<Instruction />} />
          <Route path="/QRScan" element={<QRScan />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/UploadImage" element={<UploadImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
