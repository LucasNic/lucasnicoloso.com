const skills = [
  {
    icon: "☁️",
    name: "Cloud Infrastructure",
    desc: "Multi-cloud architecture with automated failover, DNS-level routing, and cost-efficient resource provisioning.",
    tags: [
      { label: "Azure AKS", color: "blue" },
      { label: "GCP GKE", color: "green" },
      { label: "Cloudflare", color: "amber" },
      { label: "Terraform", color: "purple" },
      { label: "Terragrunt", color: "purple" },
    ],
  },
  {
    icon: "⚙️",
    name: "Backend Engineering",
    desc: "High-performance APIs and distributed services in Go, with OpenTelemetry tracing end-to-end.",
    tags: [
      { label: "Go", color: "cyan" },
      { label: "Gin", color: "cyan" },
      { label: "CockroachDB", color: "green" },
      { label: "gRPC", color: "blue" },
      { label: "REST", color: "blue" },
    ],
  },
  {
    icon: "🚀",
    name: "CI/CD & GitOps",
    desc: "End-to-end delivery pipelines with quality gates, automatic image promotion, and ArgoCD sync.",
    tags: [
      { label: "GitHub Actions", color: "purple" },
      { label: "ArgoCD", color: "blue" },
      { label: "Docker", color: "blue" },
      { label: "Helm", color: "amber" },
    ],
  },
  {
    icon: "📡",
    name: "Observability",
    desc: "Full distributed tracing with OpenTelemetry, Jaeger, and real-time WebSocket trace streaming to the UI.",
    tags: [
      { label: "OpenTelemetry", color: "blue" },
      { label: "Jaeger", color: "purple" },
      { label: "Prometheus", color: "amber" },
      { label: "WebSocket", color: "cyan" },
    ],
  },
  {
    icon: "🔒",
    name: "Security & Networking",
    desc: "Zero-trust networking, OIDC workload identity, TLS everywhere, and Cloudflare WAF at the edge.",
    tags: [
      { label: "OIDC", color: "green" },
      { label: "Cloudflare WAF", color: "amber" },
      { label: "mTLS", color: "blue" },
      { label: "RBAC", color: "purple" },
    ],
  },
  {
    icon: "🛠️",
    name: "Frontend",
    desc: "Interactive dashboards and data-driven UIs in TypeScript + React, with D3 for real-time graph visualization.",
    tags: [
      { label: "TypeScript", color: "blue" },
      { label: "React", color: "cyan" },
      { label: "Vite", color: "purple" },
      { label: "D3.js", color: "amber" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I do</p>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-sub">
          From infrastructure design to shipping production code — covering the full stack of modern cloud-native systems.
        </p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className={`tag ${t.color}`} key={t.label}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
