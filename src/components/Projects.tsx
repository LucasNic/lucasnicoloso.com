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
    title: "Multi-Cloud Resilience Platform",
    desc: "Production-grade multi-cloud platform running on Azure AKS + GCP GKE with automated DNS failover via Cloudflare Worker. Features distributed tracing with OpenTelemetry, real-time WebSocket trace visualization, CockroachDB across clouds, and a full GitOps pipeline with ArgoCD. RTO under 5 seconds with instant Worker trigger.",
    metrics: [
      { value: "<5s", label: "RTO" },
      { value: "2", label: "Clouds" },
      { value: "R$60", label: "/month" },
    ],
    stack: ["Go", "Kubernetes", "Azure", "GCP", "Cloudflare", "Terraform", "ArgoCD"],
    stackColors: ["cyan", "blue", "blue", "green", "amber", "purple", "blue"],
    links: [
      { label: "Live Demo", href: "https://app.lucasnicoloso.com", primary: true },
      { label: "GitHub", href: "https://github.com/LucasNic/multi-cloud-app" },
    ],
  },
  {
    badge: "🏗️ Infrastructure",
    title: "Multi-Cloud Infra (Terragrunt)",
    desc: "Full Terragrunt monorepo managing Azure AKS, GCP GKE, OCI compute, CockroachDB, Cloudflare DNS Worker, and KV state. GitHub Actions CI/CD with plan/apply matrix per cloud, environment protection gates, and Checkov security scanning.",
    stack: ["Terraform", "Terragrunt", "Azure", "GCP", "OCI", "GitHub Actions"],
    stackColors: ["purple", "purple", "blue", "green", "amber", "blue"],
    links: [
      { label: "GitHub", href: "https://github.com/LucasNic/multi-cloud-resilience-platform" },
    ],
  },
  {
    badge: "🤖 Alexa + GPT",
    title: "Alexa GPT Skill",
    desc: "Alexa skill that proxies requests to OpenAI GPT, deployed on AWS Lambda with Terraform. Conversational AI accessible via any Alexa-enabled device.",
    stack: ["AWS Lambda", "Terraform", "Node.js", "OpenAI"],
    stackColors: ["amber", "purple", "cyan", "green"],
    links: [
      { label: "GitHub", href: "https://github.com/LucasNic/alexaGptSkill" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Real systems running in production — not toy demos.
        </p>
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
                  <div className="project-metrics">
                    {p.metrics?.map((m) => (
                      <div className="metric" key={m.label}>
                        <div className="metric-value">{m.value}</div>
                        <div className="metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
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
