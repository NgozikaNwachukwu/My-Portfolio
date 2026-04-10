import { useState } from "react";
import macProjectsData from "../../scenes/data/macProjectsData";
import MacProjectModal from "./MacProjectModal";

const MacProjectsPage = ({ goBack, goNext }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: 'url("/images/white-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "32px 34px 56px 34px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        color: "#111",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontFamily: "MontserratCustom",
          marginBottom: "18px",
        }}
      >
        Personal Projects
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "26px 18px",
          width: "66%",
        }}
      >
        {macProjectsData.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                lineHeight: "1",
                marginBottom: "8px",
              }}
            >
              📬
            </div>

            <div
              style={{
                fontFamily: "MontserratSemiBold",
                fontSize: "11px",
                lineHeight: "1.3",
                maxWidth: "95px",
              }}
            >
              {project.name}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.open("https://github.com/NgozikaNwachukwu?tab=repositories", "_blank")}
        style={{
          position: "absolute",
          right: "38px",
          top: "120px",
          padding: "10px 18px",
          borderRadius: "999px",
          border: "2px solid #111",
          background: "transparent",
          fontFamily: "MontserratSemiBold",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
          maxWidth: "220px",
        }}
      >
        View more projects on my GitHub↗
      </button>

      <MacProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <button
        onClick={goBack}
        style={{
          position: "absolute",
          bottom: "16px",
          left: "20px",
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          border: "2px solid #111",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ←
      </button>

      <button
        onClick={goNext}
        style={{
          position: "absolute",
          bottom: "16px",
          right: "20px",
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          border: "2px solid #111",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        →
      </button>
    </div>
  );
};

export default MacProjectsPage;