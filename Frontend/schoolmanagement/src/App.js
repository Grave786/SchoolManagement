import logo from './logo.svg';
import './App.css';
import { AuthProvider } from "./context/AuthContext";
import Navbar from './Components/navbar';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Footer from './Components/Footer';
import ContactUs from './pages/Contact';

function App() {
    return (
      <div >
        <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          <Footer />
        </div>
      </Router>
  
      </div>
  );
}

export default App;
