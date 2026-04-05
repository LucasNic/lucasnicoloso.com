export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            Looking for a Senior DevOps engineer for your next project?
            I'm open to freelance contracts — infrastructure, Kubernetes, CI/CD, FinOps, and SRE consulting.
            I'm in Brazil (UTC-3) and available for async or scheduled calls.
          </p>

          <div className="contact-options">
            <a href="mailto:lunicnic@gmail.com" className="contact-card">
              <span className="contact-card-icon">✉️</span>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">lunicnic@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/5548988313795" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-card-icon">💬</span>
              <div>
                <div className="contact-card-label">WhatsApp</div>
                <div className="contact-card-value">+55 (48) 98831-3795</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-nicoloso/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-card-icon">💼</span>
              <div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-value">lucas-nicoloso</div>
              </div>
            </a>
            <a
              href="https://github.com/LucasNic"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-card-icon">💻</span>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-value">LucasNic</div>
              </div>
            </a>
          </div>

          <div className="contact-availability">
            Available for freelance · UTC-3 (Brazil)
          </div>
        </div>
      </div>
    </section>
  );
}
