const MacTestimonialsPage = ({ goBack }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "28px 34px 56px 34px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        color: "#111",
        position: "relative",
        backgroundImage: "url('/images/pink-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          fontFamily: "MontserratCustom",
          fontSize: "25px",
          marginBottom: "2px",
          color: "#111",
        }}
      >
        Testimonials
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "8px",
          alignItems: "start",
          flex: 1,
        }}
      >
        {/* LEFT TOP - Abigail */}
        <div style={cardStyle}>
          <div style={nameStyle}>Abigail Allen</div>
          <div style={roleStyle}>
            Software Development | Automation | Python | DevOps | CI/CD @ RBC
          </div>

          <p style={textStyle}>
            “I was able to mentor Ngozika at RBC and was impressed by how quickly
            she picked up new technologies and how actively she engaged in
            extracurricular activities. She has a natural learning ability toward
            DevOps and CI/CD, demonstrating strong curiosity and a solid grasp of
            key concepts.
            <br />
            <br />
            She consistently showed initiative, a willingness to learn, and the
            ability to apply feedback effectively. I’m happy to have been her
            mentor and would highly recommend her!”
          </p>
        </div>

        {/* RIGHT TOP - Valerie */}
        <div style={cardStyle}>
          <div style={nameStyle}>Valerie Ekeigwe</div>
          <div style={roleStyle}>
            SWE @ OTRI | Full-Stack & Product Engineer | React, Next.js, Python
          </div>

          <p style={textStyle}>
            “I had the chance to work with Ngozika during a hackathon, and she
            quickly became someone the whole team could rely on. From the
            beginning, she was proactive, dependable, and genuinely invested in
            both figuring out the problem and bringing our ideas to life.
            <br />
            <br />
            Ngozika has a great way of breaking down complex problems into clear,
            manageable steps, even under tight deadlines. She communicated her
            ideas clearly, worked really well with everyone on the team, and
            always followed through on what she took on.”
          </p>
        </div>

        {/* LEFT BOTTOM - Oluchi */}
        <div style={cardStyle}>
          <div style={nameStyle}>Oluchi Eleje</div>
          <div style={roleStyle}>
            Student at Ontario Tech University | Java
          </div>

          <p style={textStyle}>
            “Ngozika is the best peer mentor I could have ever hoped for. She is
            highly responsible and receptive to all my needs as a new student just
            being introduced to the world of software engineering.
            <br />
            <br />
            I had no idea how much I needed to do when I first started at Ontario
            Tech University, but she has done an amazing job providing all the
            resources and information needed for me to thrive as a student and get
            ahead in all my career planning. Ngozika is an excellent mentor and I
            will definitely recommend her to others!”
          </p>
        </div>

        {/* RIGHT BOTTOM - BUTTON */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ngozika-nwachukwu",
                "_blank"
              )
            }
            style={{
              marginTop: "70px",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "2px solid #111",
              background: "transparent",
              fontFamily: "MontserratSemiBold",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View more recommendations on my LinkedIn ↗
          </button>
        </div>
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          bottom: "16px",
          left: "1px",
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
    </div>
  );
};

export default MacTestimonialsPage;

const cardStyle = {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(50px)",
  borderRadius: "50px",
  opacity: "0.9",
  padding: "16px 18px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "150px",
};

const nameStyle = {
  fontFamily: "MontserratCustom",
  fontSize: "13.5px",
  marginBottom: "4px",
};

const roleStyle = {
  fontFamily: "MontserratSemiBold",
  fontSize: "10px",
  marginBottom: "10px",
  opacity: 0.7,
};

const textStyle = {
  fontStyle: "italic",
  fontSize: "9.3px",
  lineHeight: "1.5",
};