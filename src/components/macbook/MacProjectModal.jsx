const MacProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "420px",
        background: "#ffffff",
        border: "2px solid #3a3a3a",
        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: "#f08fb2",
          color: "#111",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "MontserratCustom",
          fontSize: "18px",
        }}
      >
        <div>Project Details</div>

        <button
          onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "22px",
            lineHeight: "1",
            cursor: "pointer",
            color: "#111",
            fontFamily: "MontserratCustom",
          }}
        >
          ×
        </button>
      </div>

      <div
        style={{
          padding: "18px",
          fontFamily: "MontserratSemiBold",
          color: "#111",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "130px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
            border: "1px solid #ddd",
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "MontserratCustom",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          {project.name}
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "12px",
          }}
        >
          {project.description}
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontFamily: "MontserratCustom" }}>Tech:</span>{" "}
          {project.tech}
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "underline",
      fontSize: "13px",
      color: "#111",
    }}
  >
    GitHub
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "underline",
        fontSize: "13px",
        color: "#111",
      }}
    >
      Live Demo
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "underline",
        fontSize: "13px",
        color: "#111",
      }}
    >
      Live Website
    </a>
  )}
</div>

      </div>
    </div>
  );
};

export default MacProjectModal;