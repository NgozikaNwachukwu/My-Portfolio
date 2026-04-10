const MacExperiencePage2 = ({ goBack, goNext }) => {
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
        color: "#111",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div
              style={{
                fontFamily: "MontserratCustom",
              }}
            >
              Web Developer Intern
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontFamily: "MontserratSemiBold",
              }}
            >
              ZUNOC Enterprises - Fabrics
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
              fontFamily: "MontserratSemiBold",
            }}
          >
            <div>January 2022 - August 2022</div>
            <div style={{ fontStyle: "italic" }}>Port Harcourt, Nigeria</div>
          </div>
        </div>

        <ul
          style={{
            marginTop: "10px",
            paddingLeft: "20px",
            fontFamily: "MontserratSemiBold",
            fontSize: "12px",
            lineHeight: "1.5",
          }}
        >
          <li>
            Developed and implemented various design ideas focusing on seamless
            user experience (UX) to enhance website usability, resulting in a
            20% increase in customer engagement on the site.
          </li>
          <li>
            Applied project management principles to prioritize tasks and manage
            timelines, ensuring the timely completion of web development
            milestones, which improved team efficiency and helped deliver the
            project on schedule.
          </li>
          <li>
            Actively communicated with clients to gather feedback and
            continuously improve website features, leading to a substantial
            increase in sales by aligning web solutions with client goals and
            enhancing functionality by 10%.
          </li>
          <li>
            Applied quality assurance testing principles to properly test updates
            before uploading to the website while regularly debugging the website
            and performing manual testing, resulting in a seamless user
            experience, which improved the traffic and popularity of the company
            by 70%.
          </li>
        </ul>
      </div>

      <button
        onClick={goBack}
        style={{
          position: "absolute",
          bottom: "20px",
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
          bottom: "20px",
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

export default MacExperiencePage2;