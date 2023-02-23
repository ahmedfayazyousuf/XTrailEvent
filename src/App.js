import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from './components/upload';
import Admin from './components/admin';
import Success from './components/Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Upload />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
