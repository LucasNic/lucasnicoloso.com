const skills = [
  {
    icon: "☁️",
    name: "Cloud Platforms",
    desc: "AWS (2+ yrs · EC2, RDS, CloudWatch), GCP (9 mos · Terraform, BigQuery, Datastream), Azure (1+ yr · AKS, DevOps, Reserved Instances), OCI (1+ yr · Kubernetes, VNet peering).",
    tags: [
      { label: "AWS", color: "amber" },
      { label: "GCP", color: "green" },
      { label: "Azure", color: "blue" },
      { label: "OCI", color: "purple" },
    ],
  },
  {
    icon: "🏗️",
    name: "Infrastructure as Code",
    desc: "3+ years with Terraform across Catho, Globo, and Cantu. Built 50+ modules for multi-cloud provisioning and environment automation. Ansible certified.",
    tags: [
      { label: "Terraform", color: "purple" },
      { label: "Terragrunt", color: "purple" },
      { label: "Ansible", color: "green" },
    ],
  },
  {
    icon: "🚀",
    name: "CI/CD & GitOps",
    desc: "Jenkins (3+ yrs), GitHub Actions (1+ yr), Azure DevOps (1+ yr), ArgoCD GitOps (1+ yr). Multi-product pipelines, automated rollback, CODEOWNERS enforcement.",
    tags: [
      { label: "Jenkins", color: "amber" },
      { label: "GitHub Actions", color: "purple" },
      { label: "ArgoCD", color: "blue" },
      { label: "Azure DevOps", color: "blue" },
      { label: "Rundeck", color: "cyan" },
    ],
  },
  {
    icon: "⚙️",
    name: "Kubernetes & Containers",
    desc: "3+ years with Kubernetes — ArgoCD deployments at Cantu, Tsuru PaaS at Globo, multi-cloud K8s. Docker certified (Jenkins at scale via Docker & K8s).",
    tags: [
      { label: "Kubernetes", color: "blue" },
      { label: "Docker", color: "cyan" },
      { label: "Helm", color: "purple" },
      { label: "ArgoCD", color: "blue" },
    ],
  },
  {
    icon: "📡",
    name: "Monitoring & Observability",
    desc: "Datadog APM/RUM/synthetic (1+ yr), Grafana (4+ yrs), ELK Stack (2+ yrs), CloudWatch (2+ yrs), Zabbix (4+ yrs), SonarQube (2+ yrs).",
    tags: [
      { label: "Datadog", color: "purple" },
      { label: "Grafana", color: "amber" },
      { label: "ELK Stack", color: "green" },
      { label: "Zabbix", color: "blue" },
      { label: "CloudWatch", color: "amber" },
    ],
  },
  {
    icon: "🔒",
    name: "Networking & Security",
    desc: "VLAN (5+ yrs), SSL/TLS lifecycle (5+ yrs), DNS multi-cloud, DevSecOps with CodeQL, Private Endpoints, Key Vault, Akamai CDN/WAF.",
    tags: [
      { label: "Akamai", color: "amber" },
      { label: "DevSecOps", color: "green" },
      { label: "SSL/TLS", color: "blue" },
      { label: "VLAN", color: "cyan" },
    ],
  },
  {
    icon: "⚖️",
    name: "Load Balancing & API Gateway",
    desc: "Nginx (3+ yrs · Globo), F5 BigIP (2+ yrs · Catho), Kong (2+ yrs · Catho), APISIX (1+ yr · Cantu), Apigee (9 mos · Globo).",
    tags: [
      { label: "Nginx", color: "green" },
      { label: "Kong", color: "blue" },
      { label: "APISIX", color: "cyan" },
      { label: "F5 BigIP", color: "amber" },
      { label: "Apigee", color: "green" },
    ],
  },
  {
    icon: "💰",
    name: "FinOps & SRE",
    desc: "3+ years of cloud cost optimization — Azure Reserved Instances, AWS right-sizing, AI-powered FinOps recommendations. 5+ years SRE: MTTR reduction, proactive incident detection.",
    tags: [
      { label: "FinOps", color: "amber" },
      { label: "OpsGenie", color: "purple" },
      { label: "SRE", color: "blue" },
      { label: "Cost Optimization", color: "green" },
    ],
  },
  {
    icon: "🖥️",
    name: "Scripting & Databases",
    desc: "Python (4+ yrs, AI automations), Bash (5+ yrs), PowerShell (2+ yrs). PostgreSQL (5+ yrs), MongoDB, SQL Server, Oracle DB, BigQuery.",
    tags: [
      { label: "Python", color: "blue" },
      { label: "Bash", color: "green" },
      { label: "PostgreSQL", color: "cyan" },
      { label: "MongoDB", color: "green" },
      { label: "PowerShell", color: "blue" },
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
          10+ years of hands-on experience across the full DevOps stack — from bare metal to multi-cloud Kubernetes.
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

        <div style={{ marginTop: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", fontFamily: "var(--font-mono)", marginBottom: 16 }}>Certifications</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
            {[
              {
                name: "AWS Well-Architected Foundations",
                issuer: "Amazon Web Services",
                date: "Nov 2024",
                credential: "E-GVP9Q1",
                url: null,
                icon: "🟧",
              },
              {
                name: "DevOps with Kubernetes",
                issuer: "University of Helsinki",
                date: "Nov 2024",
                credential: "934a8093...cef69d9a5cdcf",
                url: "https://studies.cs.helsinki.fi/stats/api/certificate/kubernetes2024/en/934a809332098f85011cef69d9a5cdcf",
                icon: "🎓",
              },
              {
                name: "Jenkins em larga escala via Docker e Kubernetes",
                issuer: "Udemy",
                date: "Jan 2020",
                credential: "UC-d0300622",
                url: "https://www.udemy.com/certificate/UC-d0300622-e527-4354-8283-645960b5a7c8/",
                icon: "🟣",
              },
              {
                name: "Ansible para SysAdmin",
                issuer: "Udemy",
                date: "Feb 2020",
                credential: "UC-77722a76",
                url: "https://www.udemy.com/certificate/UC-77722a76-1b40-4f32-b8f0-bdf16f209778/",
                icon: "🟣",
              },
              {
                name: "Desenvolvimento Cross-Plataform com Python",
                issuer: "Udemy",
                date: "Nov 2019",
                credential: "UC-LDIPPDGW",
                url: "https://www.udemy.com/certificate/UC-LDIPPDGW/",
                icon: "🟣",
              },
            ].map((c) => (
              <div key={c.credential} style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", lineHeight: 1.4 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{c.issuer} · {c.date}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: 4 }}>ID: {c.credential}</div>
                  </div>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                </div>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" style={{
                    marginTop: 4,
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--blue)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    width: "fit-content",
                  }}>
                    Show credential ↗
                  </a>
                ) : (
                  <span style={{ marginTop: 4, fontSize: 11, color: "var(--text-muted)" }}>Certificate on file</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
