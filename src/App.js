import { useState } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import Quizz from "./pages/Quizz";

function App() {
  const [start, setStart] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  const formDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);
  return (
    <div className="App">
      {start ? (
        <Quizz formData={formData} />
      ) : (
        <Intro
          setStart={setStart}
          formsData={formData}
          formDataChange={formDataChange}
        />
      )}
    </div>
  );
}

export default App;
