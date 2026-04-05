export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            Looking for a DevOps engineer or backend developer for your next project?
            I'm open to freelance contracts — infrastructure design, Kubernetes, CI/CD, and cloud architecture.
          </p>

          <div className="contact-options">
            <a href="mailto:lunicnic@gmail.com" className="contact-card">
              <span className="contact-card-icon">✉️</span>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">lunicnic@gmail.com</div>
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
            Available for freelance — starting now
          </div>
        </div>
      </div>
    </section>
  );
}
