export default function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          lucas<span>.</span>nicoloso
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Hire me</a>
      </div>
    </nav>
  );
}
