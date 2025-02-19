import logo from './logo.svg';
import './App.css';
import { AuthProvider } from "./context/AuthContext";
import Navbar from './Components/navbar';
import RegistrationForm from './Components/RegistrationForm';
function App() {
  return (
    <div className="App">
 {/* <AuthProvider>
      <Navbar />
    </AuthProvider> */}
    <RegistrationForm />
    </div>
  );
}

export default App;
