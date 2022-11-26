import React, { useState } from "react";
import "./Intro.css";
import FormData from "../components/FormData";

function Intro({ setStart, formsData, formDataChange }) {
  return (
    <div className="intro-container">
      <div className="yellow"></div>
      <div className="blue"></div>
      <h1 className="intro-title">Quizzical</h1>
      <FormData formDataChange={formDataChange} formData={formsData} />
      <button className="intro-button" onClick={() => setStart(true)}>
        start quizz
      </button>
    </div>
  );
}

export default Intro;
