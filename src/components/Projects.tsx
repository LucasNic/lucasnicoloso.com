interface ProjectLink { label: string; href: string; primary?: boolean; }
interface Project {
  featured?: boolean;
  badge: string;
  title: string;
  desc: string;
  metrics?: { value: string; label: string }[];
  stack: string[];
  stackColors: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    featured: true,
    badge: "⚡ Live Demo",
    title: "Multi‑Cloud Simulation",
    desc: "Interactive simulation of multi‑cloud architectures with four selectable strategies in real‑time. Entire physics runs in the browser — no cloud APIs called. Demonstrates latency, cost, and availability trade‑offs between Single Cloud, Cold DR, Warm Burst, and Hot Active‑Active.",
    stack: ["React", "Tailwind", "TypeScript", "Vite", "Cloudflare Pages"],
    stackColors: ["cyan", "green", "blue", "purple", "amber"],
    links: [
      { label: "Live Demo", href: "https://mcs.lucasnicoloso.com", primary: true },
      { label: "GitHub", href: "https://github.com/LucasNic/multi-cloud-simulation" },
    ],
  },
  {
    badge: "🚀 Live Demo",
    title: "Deployment Simulation",
    desc: "Interactive simulation of deployment strategies — Recreate, Rolling, Blue‑Green, Canary — zero infrastructure, pure visual impact. Visualizes traffic shifting, rollback scenarios, and failure recovery with real‑time animations.",
    stack: ["React", "Tailwind", "Framer Motion", "TypeScript", "Vite", "Cloudflare Pages"],
    stackColors: ["cyan", "green", "purple", "blue", "purple", "amber"],
    links: [
      { label: "Live Demo", href: "https://ds.lucasnicoloso.com", primary: true },
      { label: "GitHub", href: "https://github.com/LucasNic/deployment-simulation" },
    ],
  },
  {
    badge: "🌐 Website",
    title: "lucasnicoloso.com",
    desc: "Personal portfolio website of Lucas Nicoloso, Senior DevOps Engineer. Built with React, TypeScript, Vite, and deployed on Cloudflare Pages. Showcases experience, skills, and projects in a modern, responsive design.",
    stack: ["React", "TypeScript", "Vite", "CSS Modules", "ESLint", "Cloudflare Pages"],
    stackColors: ["cyan", "blue", "purple", "green", "amber", "amber"],
    links: [
      { label: "Live Site", href: "https://lucasnicoloso.com", primary: true },
      { label: "GitHub", href: "https://github.com/LucasNic/lucasnicoloso.com" },
    ],
  },
  {
    badge: "🏗️ Infrastructure",
    title: "Multi‑Cloud IaC",
    desc: "Infrastructure as Code (IaC) repository for provisioning multi‑cloud resources across Azure and GCP using Terragrunt and Terraform. Includes CI/CD pipelines, security scanning, and cost‑control measures. (Note: migrated to visual simulation to avoid cloud costs.)",
    stack: ["Terraform", "Terragrunt", "Azure", "GCP", "GitHub Actions", "Checkov"],
    stackColors: ["purple", "purple", "blue", "green", "blue", "amber"],
    links: [
      { label: "GitHub", href: "https://github.com/LucasNic/multi-cloud-iac" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`project-card${p.featured ? " featured" : ""}`} key={p.title}>
              {p.featured ? (
                <div className="project-inner">
                  <div>
                    <span className="project-badge">{p.badge}</span>
                    <h3 className="project-title" style={{ marginTop: 12 }}>{p.title}</h3>
                    <p className="project-desc" style={{ marginTop: 8 }}>{p.desc}</p>
                    <div className="project-meta">
                      <div className="project-stack">
                        {p.stack.map((s, i) => (
                          <span className={`tag ${p.stackColors[i]}`} key={s}>{s}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {p.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`project-link${l.primary ? " primary" : ""}`}
                          >
                            {l.label} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  {p.metrics && p.metrics.length > 0 && (
                    <div className="project-metrics">
                      {p.metrics.map((m) => (
                        <div className="metric" key={m.label}>
                          <div className="metric-value">{m.value}</div>
                          <div className="metric-label">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <span className="project-badge">{p.badge}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-meta">
                    <div className="project-stack">
                      {p.stack.map((s, i) => (
                        <span className={`tag ${p.stackColors[i]}`} key={s}>{s}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`project-link${l.primary ? " primary" : ""}`}
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
