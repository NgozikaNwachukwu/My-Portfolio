const MacExperiencePage = ({ goNext, goBack }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: 'url("/images/pink-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 60px",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      {/* PAGE TITLE */}
      <div
        style={{
          fontSize: "26px",
          marginBottom: "30px",
          fontFamily: "MontserratCustom",
        }}
      >
        Work Experience
      </div>

      {/* ================= SWE ================= */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "MontserratCustom" }}>
              Software Engineer
            </div>
            <div style={{ fontStyle: "italic" }}>
              Royal Bank of Canada
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div>January 2026 - August 2026</div>
            <div style={{ fontStyle: "italic" }}>Toronto, Ontario</div>
          </div>
        </div>

        <ul style={{ marginTop: "7px", paddingLeft: "20px", fontFamily: "MontserratSemiBold", fontSize: "11.5px", lineHeight: "1.5"}}>
          <li>
            Worked on the Data Platform Engineering & Enablement, Disaster Recovery team, developing and maintaining
            user-facing features using C#, .NET within a microservices architecture.
          </li>
          <li>
            Designed and implemented unit tests using xUnit, achieving 80%+ code coverage and improving reliability across
            critical business workflows.
          </li>
          <li>
            Built and maintained REST APIs integrated with MariaDB and frontend components, enabling consistent data flow
            across multiple systems.
          </li>
          <li>
            Supported deployment and scaling using Docker and OpenShift/Kubernetes, improving system stability by 15%
            and ensuring reliable production releases.
          </li>
        </ul>
      </div>

      {/* ================= QE ================= */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "MontserratCustom" }}>
              Quality Engineer
            </div>
            <div style={{ fontStyle: "italic" }}>
              Royal Bank of Canada
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div>September 2025 - December 2025</div>
            <div style={{ fontStyle: "italic" }}>Toronto, Ontario</div>
          </div>
        </div>

        <ul style={{ marginTop: "7px", paddingLeft: "20px", fontFamily: "MontserratSemiBold", fontSize: "12px", lineHeight: "1.5" }}>
          <li>
            Worked on the US Cash Management Quality Engineering RBC Clear team, developing automated test
            frameworks using Java, Selenium, Maven, TestNG to validate payment and wire transfer workflows under strict
            financial business rules.
          </li>
          <li>
            Simulated end-to-end financial transactions, including multi-user approval flows, to verify system behavior across
            authentication, transaction processing, and approval components.
          </li>
          <li>
            Reduced manual testing effort by 45% through automated validation of critical workflows, ensuring reliable
            behavior of production-level financial systems.
          </li>
        </ul>
      </div>


      {/* NAVIGATION BUTTONS */}
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          bottom: "25px",
          left: "5px",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          border: "1.5px solid black",
          background: "transparent",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ←
      </button>

      <button
        onClick={goNext}
        style={{
          position: "absolute",
          bottom: "25px",
          right: "10px",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          border: "1.5px solid black",
          background: "transparent",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        →
      </button>
    </div>
  );
};

export default MacExperiencePage;