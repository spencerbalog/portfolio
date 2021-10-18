import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

export default function Buttons() {
  const openMailTo = () => {
    window.location = "mailto:balogspencer@gmail.com?subject=[Portfolio]";
  };

  const openGitHub = () => {
    window.location = "https://github.com/spencerbalog";
  };

  const openLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/spencer-balog-032b2517a";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AwesomeButton size="icon" type="secondary" onPress={openMailTo}>
        <i className="fa fa-envelope" />
      </AwesomeButton>
      &nbsp;&nbsp;&nbsp;
      <AwesomeButton size="icon" type="secondary" onPress={openGitHub}>
        <i className="fa fa-github" />
      </AwesomeButton>
      &nbsp;&nbsp;&nbsp;
      <AwesomeButton size="icon" type="secondary" onPress={openLinkedIn}>
        <i className="fa fa-linkedin" />
      </AwesomeButton>
    </div>
  );
}
