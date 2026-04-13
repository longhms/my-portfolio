export default function About() {
  return (
    <div className="page about-page">
      <h2 className="page-title">About <span className="highlight">Me</span></h2>
      <div className="about-grid">
        <div className="about-avatar">
          <div className="avatar-placeholder">NVA</div>
          <p className="avatar-name">Nguyxn Thành Long</p>
          <p className="avatar-role">Frontend Developer</p>
        </div>
        <div className="about-text">
          <p>Tôi là một lập trình viên frontend với hơn 3 năm kinh nghiệm xây dựng các ứng dụng web hiện đại, tập trung vào trải nghiệm người dùng và hiệu suất cao.</p>
          <p>Đam mê với React, TypeScript và thiết kế UI/UX. Luôn tìm kiếm những cách tiếp cận mới để giải quyết vấn đề.</p>
          <div className="about-stats">
            {[
              { num: '3+', label: 'Năm kinh nghiệm' },
              { num: '20+', label: 'Dự án hoàn thành' },
              { num: '10+', label: 'Khách hàng hài lòng' },
            ].map(s => (
              <div key={s.label} className="stat-box">
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
