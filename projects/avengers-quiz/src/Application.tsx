import React from 'react';
import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = React.useState<boolean>(true);
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${isHidden ? 'blurred' : 'visible'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick = { () => toggleHidden(!isHidden) }>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application;
