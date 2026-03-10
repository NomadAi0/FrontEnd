import { useEffect, useState } from "react";

const gateUrl =
  "https://www.effectivegatecpm.com/mkkj5eb1?key=3c8354814e8aecdc797f57e160316d48";

const AD_SCRIPT_SRC =
  "https://pl28855267.effectivegatecpm.com/9203e363952d27fa3a6d235db4898ce4/invoke.js";
const ADS_CONTAINER_ID = "container-9203e363952d27fa3a6d235db4898ce4";
const LOCAL_STORAGE_KEY = "nomad_ads_disabled";

function injectInPageAds() {
  console.log("injectInPageAds called");

  if (document.querySelector(`#${ADS_CONTAINER_ID}`)) {
    console.log("container already exists, skipping");
    return;
  }

  const container = document.createElement("div");
  container.id = ADS_CONTAINER_ID;
  document.body.appendChild(container);
  console.log("container injected", container);

  const script = document.createElement("script");
  script.src = AD_SCRIPT_SRC;
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  document.body.appendChild(script);
  console.log("script injected", script.src);
}

function removeInPageAds() {
  document
    .querySelectorAll(`#${ADS_CONTAINER_ID}`)
    .forEach((el) => el.remove());

  document.querySelectorAll<HTMLScriptElement>("script").forEach((script) => {
    if (script.src.includes("effectivegatecpm.com")) {
      script.remove();
    }
  });
}

export default function AdOptOutBanner() {
  // null = not yet decided, true = ads disabled, false = ads enabled
  const [decision, setDecision] = useState<null | "disabled" | "enabled">(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored === "true") {
      // User already opted out in a previous session
      setDecision("disabled");
      removeInPageAds();
    }
    // If no stored preference, show banner and do NOT load ads yet
  }, []);

  const handleYes = () => {
    // Open the monetization tab
    window.open(gateUrl, "_blank", "noopener,noreferrer");
    // Disable ads + remember preference
    setDecision("disabled");
    window.localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    removeInPageAds();
  };

  const handleNo = () => {
    console.log("No clicked — injecting ads");
    setDecision("enabled");
    injectInPageAds();
  };

  // Banner already decided — don't render anything
  if (decision !== null) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: 16,
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: "100%",
          background: "rgba(18, 18, 18, 0.95)",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 18px 50px rgba(0, 0, 0, 0.4)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20, letterSpacing: 0.2 }}>
          Want to disable ads?
        </h2>
        <p style={{ margin: "10px 0 18px", lineHeight: 1.5, color: "#ddd" }}>
          Watch one short ad (2 seconds) in a new tab, then the rest of the site
          will be ad-free. You can close the ad tab when it's done.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button
            onClick={handleNo}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "10px 16px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            No thanks
          </button>
          <button
            onClick={handleYes}
            style={{
              background: "linear-gradient(135deg, #0077ff, #00d2ff)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              padding: "10px 16px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 700,
              minWidth: 100,
            }}
          >
            Yes, play ad
          </button>
        </div>
      </div>
    </div>
  );
}
