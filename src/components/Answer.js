import React, { useEffect, useState } from "react";
import "./Answer.css";

function Answer({
  answer,
  check,
  id,
  disable,
  correctAnsw,
  answered,
  setCount,
}) {
  const [checked, setChecked] = useState(false);
  const [styles, setStyles] = useState("");
  const clicked = () => {
    setChecked((prev) => !prev);
    check(id);
  };
  useEffect(() => {
    if (answered) {
      if (checked && correctAnsw === answer) {
        setCount((prev) => prev + 1);
      }
      if (correctAnsw === answer) {
        setStyles("#94D7A2");
      } else if (checked) {
        {
          setStyles("#F8BCBC");
        }
      }
    }
  }, [answered]);
  return (
    <button
      className={`answer-container ${!disable && checked && "checked"}`}
      style={{ backgroundColor: styles }}
      onClick={clicked}
      disabled={disable}
    >
      {answer}
    </button>
  );
}

export default Answer;
