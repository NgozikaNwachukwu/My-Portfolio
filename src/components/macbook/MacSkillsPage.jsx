import macSkillsData from "../../scenes/data/macSkillsData";

const MacSkillsPage = ({ goBack, goNext }) => {
  const courses = [
    "Introduction to Programming",
    "Object Oriented Programming",
    "Data Structures",
    "Web Programming",
    "Principles of Software and Requirements Engineering",
    "Statistics and Probability for Engineers",
    "Digital Systems and Computer Architecture",
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: 'url("/images/white-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "28px 34px 56px 34px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        color: "#111",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "12px",
          fontFamily: "MontserratCustom",
        }}
      >
        Relevant Courses
      </div>

      <div
  style={{
    fontSize: "10.5px",
    lineHeight: "1.5",
    marginBottom: "20px",
    maxWidth: "760px",
    fontFamily: "MontserratSemiBold",
  }}
>
  {courses.join(" • ")}
</div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "14px",
          fontFamily: "MontserratCustom",
        }}
      >
        Technical Skills
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "12px 14px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {macSkillsData.map((skillImage, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "58px",
            }}
          >
            <img
              src={skillImage}
              alt={`skill-${index + 1}`}
              style={{
                maxWidth: "78px",
                maxHeight: "36px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goBack}
        style={{
          position: "absolute",
          bottom: "16px",
          left: "5px",
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
          right: "10px",
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

export default MacSkillsPage;