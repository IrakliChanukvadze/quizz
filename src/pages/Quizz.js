import React, { useEffect, useState } from "react";
import "./Quizz.css";
import Question from "../components/Question";

function Quizz({ formData }) {
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [count, setCount] = useState(0);
  const [questNum, setQuestNum] = useState(0);

  async function fetchQuestions(num) {
    const difficulty =
      formData.difficulty && `&difficulty=${formData.difficulty}`;
    const category = formData.category && `&category=${formData.category}`;
    const type = formData.type && `&type=${formData.type}`;
    console.log(`dificulty: ${difficulty}`);
    console.log(`category: ${category}`);
    console.log(`type: ${type}`);
    const fetchUrl = `https://opentdb.com/api.php?amount=${num}${difficulty}${category}${type}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    setQuestions(data.results);
  }

  useEffect(() => {
    if (window.innerHeight < 850) {
      setQuestNum(3);
      fetchQuestions(3);
    } else {
      setQuestNum(5);
      fetchQuestions(5);
    }
  }, []);

  const startAgain = () => {
    fetchQuestions();
    setAnswered(false);
    setCount(0);
  };
  const questionJsx = questions.map((item) => (
    <Question
      key={item.question}
      question={item.question}
      answers={[...item.incorrect_answers, item.correct_answer]}
      correct={item.correct_answer}
      id={item.question}
      answered={answered}
      count={count}
      setCount={setCount}
    />
  ));
  return (
    <div className="quizz-container">
      <div className="yellow"></div>
      <div className="blue"></div>
      <div className="questions-container">{questionJsx}</div>
      {answered && (
        <h2>
          You scored {count}/{questNum} correct answers
        </h2>
      )}
      <button
        className="quizz-button"
        onClick={() => {
          answered ? startAgain() : setAnswered(true);
        }}
      >
        {answered ? "start again" : "check answers"}
      </button>
    </div>
  );
}

export default Quizz;
