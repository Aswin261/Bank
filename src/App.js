import './App.css';
import Udata from './components/card';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import Navigation from './components/navbar';
import Bank from './components/Bank';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Udata/>}/>
          <Route path="/Bank" element={<Bank/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
