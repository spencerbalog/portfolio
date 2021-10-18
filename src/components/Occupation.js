import React from "react";
import "react-awesome-button/dist/themes/theme-rickiest.css";

export default function Occupation() {
  const occupation1 = "Computer Science graduate from";
  const occupation2 = "The University of Texas at Dallas";
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <p>
          {occupation1}{" "}
          <em style={{ color: "#CC5500", fontStyle: "normal" }}>
            {occupation2}
          </em>
        </p>
        {/* &nbsp;
        <p style={{ color: "#CC5500" }}>{occupation2}</p> */}
      </div>
    </main>
  );
}
