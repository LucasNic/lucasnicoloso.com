export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About me</p>
            <h2 className="section-title">Building infrastructure that doesn't go down</h2>
            <p>
              I'm a DevOps and Backend Engineer based in Brazil, focused on designing
              cloud-native systems that are resilient by default. I work across the full
              infrastructure stack — from writing Go services to provisioning Kubernetes
              clusters on Azure and GCP with Terraform.
            </p>
            <p>
              I care about observability, fast recovery, and keeping costs sane.
              My projects are built with real multi-cloud redundancy, automated failover,
              and distributed tracing so you always know what's happening.
            </p>
            <p>
              Open to freelance engagements — infrastructure design, Kubernetes migrations,
              CI/CD automation, and cloud cost optimization.
            </p>
          </div>
          <div className="about-stats">
            {[
              { number: "3+", label: "Years in cloud infra" },
              { number: "2", label: "Cloud providers (AKS + GKE)" },
              { number: "~4m", label: "RTO on failover" },
              { number: "R$60", label: "Monthly infra cost" },
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
