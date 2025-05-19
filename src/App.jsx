import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lehenga from './pages/Lehenga';
import Saree from './pages/Saree';
import Suit from './pages/Suit';
import Showcase from './pages/Showcase';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lehenga" element={<Lehenga />} />
          <Route path="/saree" element={<Saree />} />
          <Route path="/suit" element={<Suit />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
