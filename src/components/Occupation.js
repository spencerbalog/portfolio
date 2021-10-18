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
        <h3 style={{ fontWeight: "normal", fontSize: 20 }}>
          {occupation1}{" "}
          <em style={{ color: "#CC5500", fontStyle: "normal" }}>
            {occupation2}
          </em>
        </h3>
      </div>
    </main>
  );
}
