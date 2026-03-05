import type { ReactNode } from "react";
import { useEffect } from "react";

const jobData = {
  id: "job_001",
  company: {
    name: "Nomad.AI",
    logoUrl: null,
    logoText: "NOMAD.AI",
    website: "https://nomad.ai",
  },
  title: "Senior Software Engineer - Full Stack",
  location: {
    type: "remote",
    city: null,
    state: null,
    country: "United States",
    display: "Remote (United States)",
  },
  overview:
    "This opportunity is for a Senior Software Engineer – Full Stack to help build AI-driven compliance technology that addresses complex challenges in the financial services industry. The role involves developing scalable systems across data pipelines, backend APIs, intelligent decisioning engines, and modern web platforms. This position offers the opportunity to work on mission-critical technology with real-world impact in a fast-moving startup environment.",
  payAndBenefits: {
    employmentType: "Full-time",
    salaryMin: 150000,
    salaryMax: 180000,
    salaryCurrency: "USD",
    salaryPeriod: "year",
    salaryDisplay:
      "$150,000–$180,000 per year (~$72.12–$86.54 per hour based on 40 hours/week)",
    equity: "Equity participation",
    benefits: [
      "Comprehensive healthcare coverage",
      "401(k) plan",
      "Fully remote team with expected availability during standard EST business hours",
    ],
  },
  requirements: {
    experienceYears: 2,
    educationLevel: "Strong technical foundation",
    skills: [
      "Go",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "API Design",
      "Backend Systems",
      "Relational Databases",
    ],
    niceToHave: [
      "PostgreSQL",
      "Elasticsearch",
      "Containerization",
      "Distributed Systems",
      "AI-powered development tools",
      "5+ years experience",
    ],
  },
  responsibilities: [
    "Design, build, and maintain new and existing full-stack products.",
    "Develop scalable APIs, backend systems, and data pipelines.",
    "Build and maintain responsive front-end applications using modern frameworks.",
    "Develop and support third-party integrations.",
    "Contribute across the software development lifecycle from planning through deployment.",
    "Write efficient, maintainable, and scalable code.",
    "Draft and review technical documentation.",
    "Provide technical support to cross-functional stakeholders including sales and customer-facing teams.",
    "Balance business priorities, user experience, and sustainable technical architecture.",
    "Collaborate effectively within a distributed remote team.",
  ],
  tags: ["Remote", "Full Stack", "Go", "Python", "React"],
  postedAt: "2026-02-20T10:00:00Z",
  expiresAt: "2026-04-20T10:00:00Z",
  applicationUrl:
    "https://castellumai.rippling-ats.com/job/947972/senior-software-engineer-full-stack",
  status: "open",
};

interface BadgeProps {
  children: ReactNode;
  color?: string;
  textColor?: string;
}

function Badge({
  children,
  color = "#e8f0fe",
  textColor = "#1a56db",
}: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: 600,
        background: color,
        color: textColor,
        marginRight: "6px",
        marginBottom: "4px",
      }}
    >
      {children}
    </span>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <h2
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#1a56db",
          borderBottom: "1.5px solid #e8eef8",
          paddingBottom: "6px",
          marginBottom: "14px",
          fontFamily: "'Georgia', serif",
          letterSpacing: "0.3px",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function JobListing() {
  const job = jobData;

  useEffect(() => {
    document.title = "Senior Software Engineer - Full Stack | Nomad.AI";
    return () => {
      document.title = "Nomad.AI - Gaming News, Leaks & Job Opportunities";
    };
  }, []);

  const labelStyle = {
    fontWeight: 700,
    color: "#222",
    fontSize: "14px",
    minWidth: "160px",
    display: "inline-block",
  };

  const valueStyle = {
    color: "#444",
    fontSize: "14px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 16px",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          maxWidth: "560px",
          width: "100%",
          padding: "36px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Header — centered */}
        <div style={{ marginBottom: "24px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#1a56db",
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Nomad.AI
          </h1>
        </div>

        {/* Company + Title + Location — centered */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#666",
              margin: "0 0 6px 0",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Company: CastellumAI
          </p>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#1a56db",
              margin: "0 0 8px 0",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.3,
            }}
          >
            {job.title}
          </h2>
          <p
            style={{
              color: "#c0392b",
              fontWeight: 600,
              fontSize: "14px",
              margin: 0,
              fontFamily: "Arial, sans-serif",
            }}
          >
            {job.location.display}
          </p>
        </div>

        {/* Body sections — left-aligned (correct for readability) */}
        <Section title="Job Overview">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {job.overview
              .split("Senior Software Engineer – Full Stack")
              .map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <strong>Senior Software Engineer – Full Stack</strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
          </p>
        </Section>

        <Section title="Pay and Benefits">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <p>
              <strong style={labelStyle}>Status:</strong>{" "}
              <span style={valueStyle}>
                {job.payAndBenefits.employmentType}
              </span>
            </p>
            <p>
              <strong style={labelStyle}>Salary Range:</strong>{" "}
              <span style={valueStyle}>{job.payAndBenefits.salaryDisplay}</span>
            </p>
            <p>
              <strong style={labelStyle}>Equity:</strong>{" "}
              <span style={valueStyle}>{job.payAndBenefits.equity}</span>
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Benefits:</strong>
            </p>
            <ul style={{ margin: "6px 0", paddingLeft: "20px" }}>
              {job.payAndBenefits.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title="Requirements">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <p>
              <strong>Experience:</strong> {job.requirements.experienceYears}+
              years
            </p>
            <p>
              <strong>Education:</strong> {job.requirements.educationLevel}
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Required Skills:</strong>
            </p>
            <ul style={{ margin: "6px 0", paddingLeft: "20px" }}>
              {job.requirements.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p style={{ marginTop: "12px" }}>
              <strong>Nice to have:</strong>{" "}
              {job.requirements.niceToHave.join(", ")}
            </p>
          </div>
        </Section>

        <Section title="Responsibilities">
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.8,
            }}
          >
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Section>

        <Section title="Tags">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {job.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Section>

        {/* Apply Button */}
        <div style={{ marginBottom: "28px" }}>
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              background: "#1a56db",
              color: "white",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            Apply Now
          </a>
        </div>

        <Section title="Work Environment">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <p>
              This is a fully remote position, with team members based across
              various cities. Everyone is online and expected to be available
              between 9–5 EST.
            </p>
            <p>
              <strong>Legal Requirements:</strong> You must be legally
              authorized to work in the United States to be considered for this
              role.
            </p>
            <p>
              <strong>Diversity:</strong> We care about creating a diverse team
              and encourage applications from all demographics.
            </p>
          </div>
        </Section>

        {/* Recruitment Notice */}
        <p
          style={{
            fontSize: "12px",
            color: "#888",
            textAlign: "center",
            marginTop: "24px",
            marginBottom: "12px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Recruitment notice: all communication only happens from authorized
          email addresses ending in <strong>@nomad.ai</strong>. We never ask for
          payments or sensitive documents. Suspect a scam?{" "}
          <a href="mailto:contactNomadAi@proton.me">contact@nomadai.online</a>.
        </p>
      </div>
    </div>
  );
}
