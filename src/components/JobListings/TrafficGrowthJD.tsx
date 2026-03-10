import { useEffect } from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
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

const TrafficGrowthJD = () => {
  useEffect(() => {
    document.title = "Traffic Growth Associate - Job Opportunity | Nomad.AI";
    return () => {
      document.title = "Nomad.AI - Gaming News, Leaks & Job Opportunities";
    };
  }, []);

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

        {/* Title — centered */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
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
            Traffic Growth Associate
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
            Practical Challenge – Organic Traffic
          </p>
        </div>

        {/* Body sections — left-aligned */}
        <Section title="Role Overview">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Nomad.AI is looking for motivated individuals who can drive{" "}
            <strong>high-quality, organic traffic</strong> to a job listing
            website. The primary objective is to increase the number of genuine
            visitors to a specific webpage by using creative, ethical, and
            data-driven promotion strategies.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: "12px 0 0 0",
            }}
          >
            This role begins with a{" "}
            <strong>practical evaluation challenge</strong>, followed by a{" "}
            <strong>basic interview round</strong> for candidates who
            successfully demonstrate their ability to generate meaningful
            traffic.
          </p>
        </Section>

        <Section title="Challenge Objective">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Candidates must generate{" "}
            <strong>as much organic traffic as possible</strong> to the
            following website within a fixed time frame:
          </p>
          <p style={{ margin: "12px 0" }}>
            <strong>Target URL:</strong>{" "}
            <a
              href="https://nomadai.online/"
              target="_blank"
              style={{
                color: "#1a56db",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              https://nomadai.online/
            </a>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            The website contains a job posting for a U.S. company, and the goal
            is simply to drive legitimate visitors to the page.
          </p>
        </Section>

        <Section title="Challenge Duration">
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#c0392b",
              margin: 0,
            }}
          >
            72 Hours
          </p>
        </Section>

        <Section title="Key Requirements">
          <ul style={{ margin: "6px 0", paddingLeft: "20px", color: "#333" }}>
            <li style={{ marginBottom: "8px" }}>
              Drive genuine organic traffic to the provided URL.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Use legitimate marketing channels such as:
              <ul style={{ margin: "6px 0", paddingLeft: "20px" }}>
                <li>Social media promotion</li>
                <li>Online communities and forums (e.g., Reddit)</li>
                <li>SEO strategies</li>
                <li>Content promotion</li>
                <li>Relevant job or career platforms</li>
              </ul>
            </li>
          </ul>
          <p
            style={{
              color: "#c0392b",
              fontWeight: 600,
              fontSize: "14px",
              margin: "12px 0 0 0",
            }}
          >
            <strong>Important:</strong> Use of bots or artificial traffic
            generation will result in immediate disqualification.
          </p>
        </Section>

        <Section title="Documentation Requirement">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Participants must submit a Word document report containing:
          </p>
          <ul style={{ margin: "6px 0", paddingLeft: "20px", color: "#333" }}>
            <li>Platforms used to promote the website</li>
            <li>Links to posts or campaigns</li>
            <li>Analytics or insights</li>
            <li>Strategy explanation</li>
            <li>Screenshots or metrics</li>
          </ul>
        </Section>

        <Section title="Selection Process">
          <div style={{ fontSize: "14px", color: "#333", lineHeight: 1.8 }}>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#1a56db",
                margin: "0 0 8px 0",
                fontFamily: "'Georgia', serif",
              }}
            >
              Round 1 – Practical Challenge
            </h3>
            <ul style={{ margin: "6px 0", paddingLeft: "20px" }}>
              <li>
                Drive the highest possible organic traffic within 72 hours.
              </li>
              <li>Submit the documentation report.</li>
            </ul>

            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#1a56db",
                margin: "16px 0 8px 0",
                fontFamily: "'Georgia', serif",
              }}
            >
              Round 2 – Basic Interview
            </h3>
            <p style={{ margin: 0 }}>
              Candidates who perform well in the challenge will be invited for a
              short interview discussion.
            </p>
          </div>
        </Section>

        <Section title="Work Conditions">
          <ul style={{ margin: "6px 0", paddingLeft: "20px", color: "#333" }}>
            <li>Flexible working hours</li>
            <li>Remote participation</li>
            <li>
              Performance measured primarily by traffic results and strategy
            </li>
          </ul>
        </Section>

        <Section title="Ideal Candidate Profile">
          <ul style={{ margin: "6px 0", paddingLeft: "20px", color: "#333" }}>
            <li>Familiar with SEO and online promotion strategies</li>
            <li>Comfortable using Reddit, social media, and forums</li>
            <li>Creative in designing traffic-generation campaigns</li>
            <li>Data-driven and able to track results</li>
          </ul>
        </Section>

        <Section title="Key Evaluation Criteria">
          <ul style={{ margin: "6px 0", paddingLeft: "20px", color: "#333" }}>
            <li>Volume of organic traffic generated</li>
            <li>Quality of traffic sources</li>
            <li>Creativity in promotion strategies</li>
            <li>Clarity of documentation</li>
          </ul>
        </Section>

        <Section title="Important Note">
          <p
            style={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            The target traffic number is not disclosed, as the company evaluates
            candidates based on their ability to push their limits and
            demonstrate initiative.
          </p>
        </Section>

        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            paddingTop: "20px",
            borderTop: "1px solid #e8eef8",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#1a56db",
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Good luck to all candidates participating in the challenge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrafficGrowthJD;
