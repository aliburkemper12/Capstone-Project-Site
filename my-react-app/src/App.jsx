import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Deliverables from './pages/Deliverables';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Errp for EEG Capstone Project
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/deliverables" className="nav-link">Deliverables</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">Team</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deliverables" element={<Deliverables />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2026 UA CS-495 Capstone. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;