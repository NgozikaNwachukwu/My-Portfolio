const MacAboutPage = ({ goNext }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: 'url("/images/pink-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 60px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
        color: "#111",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          fontSize: "26px",
          fontWeight: "600",
          marginBottom: "20px",
          fontFamily: "MontserratCustom",
        }}
      >
        About Me
      </div>

      {/* CONTENT */}
      <div
        style={{
          fontSize: "11.8px",
          lineHeight: "1.6",
          maxWidth: "700px",
          fontFamily: "MontserratSemiBold",
        }}
      >
        <p>
  Hi there! I’m Ngozika 👋🏽 a Software Engineering student at Ontario Tech University with a 3.51 GPA, currently working as a Software Engineer Co-op within RBC Technology Infrastructure. I’ve gained hands-on experience across both quality engineering and software engineering spaces, contributing to production systems where reliability and stability are critical.
</p>

<p>
  I’m particularly passionate about building and maintaining production systems, ensuring they remain stable while continuously evolving. Whether it’s coordinating system updates, improving reliability, or developing pipelines that support scalable software, I enjoy working on problems where thoughtful engineering decisions have real impact.
</p>
<p>
  I’m naturally curious and always eager to learn. I enjoy exploring different areas within software engineering and expanding my skill set, because staying adaptable and continuously learning with tech and different systems as they grow is important.
</p>
<p>
  Outside of school and work, I’m a peer mentor for junior female Software Engineering students, where I’m passionate about supporting and uplifting women in tech. I also enjoy expressing my creativity through painting, sewing, and building personal projects that bring my ideas to life.
</p>

<p>
 I believe a great software engineer doesn’t just focus on whether a system works, but on how reliably it works, how it evolves over time, and the impact it has on people of different backgrounds who use it.
</p>

      </div>

      {/* RESUME BUTTON */}
      <button
        onClick={() => window.open("/Ngozika_Resume2.pdf", "_blank")}
        style={{
          marginTop: "1px",
          padding: "6px 18px",
          borderRadius: "999px",
          border: "3px solid black",
          background: "transparent",
          fontSize: "14px",
          fontFamily: "MontserratSemiBold",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        View My Resume↗
      </button>

      {/* NEXT BUTTON */}
      <button
  onClick={goNext}
  style={{
    position: "absolute",
    bottom: "10px",
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

export default MacAboutPage;