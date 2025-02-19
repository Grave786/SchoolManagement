import logo from './logo.svg';
import './App.css';
import { AuthProvider } from "./context/AuthContext";
import Navbar from './Components/navbar';
import RegistrationForm from './Components/RegistrationForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Components/Footer';

function App() {
    return (
      <div >
        <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          <Footer />
        </div>
      </Router>
  
      </div>
  );
}

export default App;
