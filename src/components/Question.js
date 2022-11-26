import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import "./Question.css";

function Question({ answers, question, correct, answered, setCount }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [potentianAnsw, setPotentianAnsw] = useState(false);

  const shuffleAnswers = (arr) => {
    const newArr = [...arr];

    for (let i = 0; i < newArr.length; i++) {
      const j = Math.floor(Math.random() * arr.length);
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    setAllAnswers(shuffleAnswers(answers));
  }, []);
  const check = (id) => {
    setPotentianAnsw((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question}</h2>
      <div className="answers-container">
        {allAnswers.map((item) => (
          <Answer
            setCount={setCount}
            correctAnsw={correct}
            answer={item}
            key={item}
            check={check}
            id={item}
            disable={(potentianAnsw && item != potentianAnsw) || answered}
            answered={answered}
          />
        ))}
      </div>
      <hr className="question-hr" />
    </div>
  );
}

export default Question;
