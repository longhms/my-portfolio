import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function Navbar() {
  const location = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Project' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-dot">◆</span> MyPortfolio
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 MyPortfolio · Được xây dựng bằng React + Vite</p>
        </footer>
      </div>
    </Router>
  )
}
