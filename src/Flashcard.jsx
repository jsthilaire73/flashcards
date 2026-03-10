import { useState } from "react";

function Flashcard({ question, answer }) {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
   <div className="flashcard" onClick={handleClick}>
      {flipped ? answer : question}
    </div>
  );

}

export default Flashcard;