import { useState } from "react";
import './App.css'
import Flashcard from "./Flashcard";

function App() {

const [currentCard, setCurrentCard] = useState(0);
  const flashcards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What does CSS control?", answer: "The styling and layout of web pages" },
  { question: "What does JS stand for?", answer: "JavaScript" },
  { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
  { question: "What does API stand for?", answer: "Application Programming Interface" }
];

  return (
    <div className="App">
      <h1>Computer Science Flashcards</h1>
      <p>Test your knowledge of computer science concepts.</p>
      <p>Total Cards: {flashcards.length}</p>
      
   <Flashcard
  question={flashcards[currentCard].question}
  answer={flashcards[currentCard].answer}
/>
<button onClick={() => {
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  setCurrentCard(randomIndex);
}}>
Next Card
</button>

    </div>
  )
}

export default App