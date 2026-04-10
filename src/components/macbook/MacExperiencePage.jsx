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
            Developed frontend components for internal applications using C#, implementing features within feature branches and following version control best practices for clean integration.
          </li>
          <li>
            Designed and implemented unit tests using xUnit to meet Helios standards, achieving over 80% code coverage across repositories and improving code reliability.
          </li>
          <li>
            Updated database schemas using MariaDB to support evolving business requirements, ensuring alignment between backend data and application logic.
          </li>
          <li>
            Supported deployment and maintenance workflows using Helios (Docker) and OpenShift/Kubernetes, improving deployment stability by approximately 15%.
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
            Supporting the Quality Engineering team by contributing to program reviews and process audits, and aligning work with automation frameworks and quality benchmarks defined by the program team.
          </li>
          <li>
            Applying Scrum and Agile methodologies to coordinate automation deliverables with developers and product owners, improving visibility and on-time execution across squads by 15%.
          </li>
          <li>
            Monitoring the development and deployment of production applications to ensure quality standards are met and assessing the effectiveness of automation workflows for continuous improvement.
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