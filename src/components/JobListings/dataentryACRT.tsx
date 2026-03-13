import type { ReactNode } from "react";
import { useEffect } from "react";

const jobData = {
  id: "job_002",
  company: {
    name: "Bermex, Inc.",
    logoText: "BERMEX",
    website: "https://bermex.com",
    parent: "ACRT, Inc.",
  },
  title: "Data Entry Technician",
  requisitionId: "R8796",
  location: {
    type: "onsite",
    city: "Columbus",
    state: "OH",
    country: "United States",
    display: "Columbus, OH (On-Site)",
  },
  overview:
    "The Data Entry Specialist reports to the Natural Gas Supervisor and plays a critical role in supporting utility metering and billing operations through the accurate entry, organization, and management of field data collected by technicians. This position ensures that meter and operational data collected in the field is digitized accurately and efficiently so billing processes can be completed in a timely manner. The Data Entry Specialist works closely with internal operations staff and field personnel to maintain accurate records, identify data discrepancies, and support operational efficiency while adhering to Bermex policies and data management standards.",
  aboutTeam:
    "Bermex offers expert utility consulting services and solutions to utilities and associated organizations throughout the United States, including leak detection, atmospheric corrosion, line location, software service solutions, as well as water, gas, and electric meter reading and installation. At Bermex, we are always looking for motivated individuals who enjoy working independently and love the outdoors to become a part of our team.",
  payAndBenefits: {
    employmentType: "Full-time Regular",
    salaryMin: 20,
    salaryMax: 20,
    salaryCurrency: "USD",
    salaryPeriod: "hour",
    salaryDisplay: "$20.00 per hour",
    equity: null,
    benefits: [
      "Laptop, cell phone, and office workspace provided",
      "Equal Employment / Affirmative Action employer",
      "Reasonable accommodations available upon request",
    ],
  },
  requirements: {
    mustHave: [
      "High School Diploma or GED; must be 18 years of age or older",
      "Minimum 6 months of work experience in an office or administrative environment",
      "Basic computer proficiency with data entry systems, spreadsheets, or database platforms",
      "10-key typing test required as part of application process (8,000 KPH desired)",
      "Ability to report to the Columbus office daily",
    ],
    niceToHave: [
      "Associate's Degree or additional post-secondary education",
      "Two (2) or more years of experience in data entry or administrative support",
      "Experience working with billing systems or financial data",
      "Experience working with large data sets or multiple database platforms",
    ],
  },
  skills: [
    "Microsoft Excel",
    "Microsoft Office Suite",
    "Data Entry Systems",
    "Database Platforms",
    "10-Key Typing",
    "Attention to Detail",
    "Time Management",
    "Problem-Solving",
  ],
  responsibilities: {
    "Data Entry and Billing Support": [
      "Collect and digitize operational and leak survey-related data from internal paper forms and mapping, entering the data into client specific systems.",
      "Maintain detailed and organized records to ensure all data entries are complete, accurate, and traceable.",
      "Track completed data entry tasks to ensure information is delivered in a timely manner.",
      "Support the preparation of survey data by ensuring information collected from field technicians is properly recorded and formatted.",
    ],
    "Data Quality and Record Management": [
      "Maintain organized digital filing systems and records to ensure accurate documentation and accessibility of billing data.",
      "Review data entries for completeness and accuracy prior to submission into customer databases.",
      "Identify and address data inconsistencies by coordinating with internal operations staff or appropriate personnel.",
      "Establish and maintain data entry standards and procedures to improve data quality and efficiency.",
      "Maintain a high standard of data accuracy, organization, and documentation practices.",
    ],
    "Communication and Operational Support": [
      "Collaborate with the internal operations team to resolve missing or inconsistent survey information.",
      "Respond to data inquiries and report significant data errors or discrepancies to management.",
      "Assist internal teams by ensuring field data is properly recorded and available for operational and billing purposes.",
      "Support coordination between field technicians and office staff to ensure accurate transfer of field-collected data.",
    ],
    "Safety & Compliance Accountability": [
      "Consistently comply with Bermex policies, procedures, and applicable company standards.",
      "Maintain confidentiality and integrity when handling billing data and internal company information.",
      "Follow established data management practices to ensure security, accuracy, and compliance with company expectations.",
      "Promote and support Bermex's culture of safety, professionalism, and operational integrity.",
    ],
  },
  tags: ["On-Site", "Data Entry", "Full-Time", "Utilities", "Columbus OH"],
  postedAt: "2026-03-12T10:00:00Z",
  requisition: "R8796",
  applicationUrl: "https://bermex.com/careers",
  status: "open",
  supervisorResponsibilities:
    "This position has no direct supervisory responsibilities.",
  workingConditions: [
    "Work is primarily performed in an office environment with computer-based tasks.",
    "Position requires reporting to the Columbus office on a regular basis.",
    "While performing the duties of this job, the employee may be required to sit for extended periods of time.",
    "Laptop, cell phone, and office workspace will be provided to support job responsibilities.",
  ],
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

export default function DataEntryACRT() {
  const job = jobData;

  useEffect(() => {
    document.title = "Data Entry Technician | Bermex, Inc.";
    return () => {
      document.title = "Bermex, Inc. - Careers";
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
            NomadAI
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
            Company: {job.company.parent}
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
              margin: "0 0 4px 0",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {job.location.display}
          </p>
          <p
            style={{
              color: "#888",
              fontSize: "12px",
              margin: 0,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Req ID: {job.requisitionId}
          </p>
        </div>

        {/* About The Team */}
        <Section title="About The Team">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {job.aboutTeam}
          </p>
        </Section>

        {/* Job Overview */}
        <Section title="Position Summary">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {job.overview.split("Data Entry Specialist").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <strong>Data Entry Specialist</strong>
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </p>
        </Section>

        {/* Pay and Benefits */}
        <Section title="Pay and Benefits">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <p>
              <strong style={labelStyle}>Status:</strong>{" "}
              <span style={valueStyle}>
                {job.payAndBenefits.employmentType}
              </span>
            </p>
            <p>
              <strong style={labelStyle}>Pay Rate:</strong>{" "}
              <span style={valueStyle}>{job.payAndBenefits.salaryDisplay}</span>
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

        {/* Responsibilities */}
        <Section title="Essential Duties and Responsibilities">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            {Object.entries(job.responsibilities).map(([category, items]) => (
              <div key={category} style={{ marginBottom: "14px" }}>
                <p style={{ margin: "0 0 6px 0" }}>
                  <strong>{category}</strong>
                </p>
                <ul style={{ margin: "0", paddingLeft: "20px" }}>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Requirements */}
        <Section title="Requirements">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <p style={{ margin: "0 0 6px 0" }}>
              <strong>Must Haves:</strong>
            </p>
            <ul style={{ margin: "0 0 14px 0", paddingLeft: "20px" }}>
              {job.requirements.mustHave.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p style={{ margin: "0 0 6px 0" }}>
              <strong>Nice to Have:</strong>
            </p>
            <ul style={{ margin: "0", paddingLeft: "20px" }}>
              {job.requirements.niceToHave.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section title="Key Skills">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {job.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Tags */}
        <Section title="Tags">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {job.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Section>

        {/* Apply Button */}
        <div style={{ marginBottom: "28px" }}>
          <button
            onClick={() => {
              window.open(
                "https://www.effectivegatecpm.com/mkkj5eb1?key=3c8354814e8aecdc797f57e160316d48",
                "_blank",
                "noopener,noreferrer",
              );

              setTimeout(() => {
                window.location.href =
                  "https://acrt.wd1.myworkdayjobs.com/ACRT_Careers/job/OH-Columbus/Data-Entry-Technician---Columbus--OH--DOT-_R8796-1?source=LinkedIn";
              }, 200);
            }}
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
              border: "none",
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Work Environment */}
        <Section title="Working Conditions">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {job.workingConditions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <p style={{ marginTop: "12px" }}>
              <strong>Supervisor Responsibilities:</strong>{" "}
              {job.supervisorResponsibilities}
            </p>
            <p>
              <strong>Legal Requirements:</strong> You must be legally
              authorized to work in the United States to be considered for this
              role.
            </p>
            <p>
              <strong>Diversity:</strong> We are an Equal Employment /
              Affirmative Action employer. We do not discriminate in hiring on
              the basis of sex, gender identity, sexual orientation, race,
              color, religious creed, national origin, physical or mental
              disability, protected Veteran status, or any other characteristic
              protected by federal, state, or local law.
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
          For accommodation requests, contact{" "}
          <a href="mailto:hr@acrtinc.com">hr@acrtinc.com</a>. Only accommodation
          inquiries will receive a response from this address.
        </p>
      </div>
    </div>
  );
}
