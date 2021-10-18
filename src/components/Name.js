import React from "react";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import "./Name.css";

export default function Name() {
  const name = "Spencer Balog";
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          margin: 0,
        }}
      >
        <h1>{name}</h1>
      </div>
    </main>
  );
}
