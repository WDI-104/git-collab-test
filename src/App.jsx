import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DefaultComponent from "./components/DefaultComponent";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import FeatureTerranceRivers from "./components/Feature-TerranceRivers";

function App() {
  return (
    <>
      <DefaultComponent />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <FeatureTerranceRivers />
    </>
  );
}

export default App;
