export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-inner">
        <span className="footer-copy">© {year} Lucas Nicoloso. All rights reserved.</span>
        <div className="footer-links">
          <a href="https://github.com/LucasNic" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/lucas-nicoloso/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/lucas_nicoloso/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
