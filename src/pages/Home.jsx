import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <div className="hero-badge">👋 Xin chào!</div>
        <h1 className="hero-title">Tôi là <span className="highlight">Nguyxn Thành Long</span></h1>
        <p className="hero-sub">Frontend Developer · UI/UX Enthusiast · React Lover</p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">Xem Dự Án</Link>
          <Link to="/contact" className="btn btn-outline">Liên Hệ Ngay</Link>
        </div>
      </div>
      <div className="skills-strip">
        {['React', 'JavaScript', 'TypeScript', 'CSS', 'Node.js', 'Git', 'Figma', 'Python'].map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </div>
  )
}
