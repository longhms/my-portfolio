import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page contact-page">
      <h2 className="page-title">Con<span className="highlight">tact</span></h2>
      <p className="page-sub">Hãy để lại tin nhắn cho tôi!</p>
      {sent ? (
        <div className="success-msg">✅ Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất có thể.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên của bạn</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nguyễn Văn B" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label>Tin nhắn</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Nhập tin nhắn của bạn..." rows={5} required />
          </div>
          <button type="submit" className="btn btn-primary">Gửi Tin Nhắn</button>
        </form>
      )}
      <div className="contact-info">
        <div className="info-item">📧 nguyxnthanhlong@email.com</div>
        <div className="info-item">📍 Hà Nội, Việt Nam</div>
        <div className="info-item">💼 GitHub: github.com/nguyxnthanhlong</div>
      </div>
    </div>
  )
}
