const projects = [
  { id: 1, title: 'E-Commerce App', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Ứng dụng mua sắm trực tuyến với đầy đủ tính năng giỏ hàng, thanh toán và quản lý đơn hàng.', color: '#6c63ff' },
  { id: 2, title: 'Task Manager', tech: ['React', 'TypeScript', 'Firebase'], desc: 'Ứng dụng quản lý công việc theo phương pháp Kanban với tính năng kéo thả tiện lợi.', color: '#ff6584' },
  { id: 3, title: 'Weather Dashboard', tech: ['React', 'REST API', 'Chart.js'], desc: 'Dashboard thời tiết hiển thị dự báo 7 ngày với biểu đồ trực quan và tìm kiếm địa điểm.', color: '#43b89c' },
  { id: 4, title: 'Blog Platform', tech: ['Next.js', 'Markdown', 'Tailwind'], desc: 'Nền tảng blog cá nhân với hỗ trợ Markdown, dark mode và tối ưu SEO.', color: '#f9a825' },
]

export default function Projects() {
  return (
    <div className="page projects-page">
      <h2 className="page-title">Pro<span className="highlight">ject</span></h2>
      <p className="page-sub">Một số dự án tôi đã thực hiện</p>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className="project-card" style={{'--card-color': p.color}}>
            <div className="card-accent" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="card-tech">
              {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
