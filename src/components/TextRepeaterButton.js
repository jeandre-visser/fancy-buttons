import { useState } from "react";

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);

  const textArr = [];
  for (let i = 0; i < repetitions; i++) {
    textArr.push(<span key={i} >I like this text</span>)
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  }

  return (
    <button className="TextRepeaterButton" onClick={handleClick} > 
    {textArr}
    </button>
  );
}

export default TextRepeaterButton;