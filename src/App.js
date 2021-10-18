import "./App.css";
import React from "react";
import Buttons from "./components/Buttons";
import Name from "./components/Name";
import Occupation from "./components/Occupation";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";

export default function App() {
  return (
    <main>
      <div style={{ height: "10vh" }} />
      <Name />
      <Occupation />
      <Buttons />
    </main>
  );
}
