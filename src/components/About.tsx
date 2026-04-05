export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About me</p>
            <h2 className="section-title">10+ years keeping infrastructure running</h2>
            <p>
              I'm a Senior DevOps Engineer based in Brazil (UTC-3), with over a decade of experience
              building and operating cloud infrastructure at companies like Catho, Globo, and Cantu.
              I've worked across AWS, GCP, Azure, and OCI — managing everything from bare metal to
              fully automated multi-cloud Kubernetes deployments.
            </p>
            <p>
              My focus is on reliability, automation, and cost efficiency. I've built 50+ Terraform
              modules, reduced MTTR with proactive observability stacks, and cut cloud costs through
              FinOps practices across multiple organizations.
            </p>
            <p>
              Available for freelance — infrastructure design, Kubernetes migrations, CI/CD automation,
              cloud cost optimization, and SRE consulting.
            </p>
            <div className="about-pillars">
              {[
                { icon: "🔒", title: "Least Privilege", desc: "Zero-trust access, scoped credentials, minimal blast radius" },
                { icon: "🛡️", title: "Security First", desc: "Shift-left scanning, secrets management, policy-as-code" },
                { icon: "🔁", title: "Automate Everything", desc: "If you do it twice, automate it — IaC, CI/CD, GitOps" },
                { icon: "📉", title: "FinOps Driven", desc: "Right-sizing, spot instances, cost visibility from day one" },
              ].map(({ icon, title, desc }) => (
                <div className="pillar-tag" key={title}>
                  <span className="pillar-icon">{icon}</span>
                  <div>
                    <span className="pillar-title">{title}</span>
                    <span className="pillar-desc">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {[
              { number: "10+", label: "Years in DevOps" },
              { number: "4", label: "Cloud platforms (AWS, GCP, Azure, OCI)" },
              { number: "50+", label: "Terraform modules built" },
              { number: "UTC-3", label: "Timezone (Brazil)" },
            ].map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
