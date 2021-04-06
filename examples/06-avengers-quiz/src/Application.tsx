import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className="blurred">{answer}</span>
      </p>
      <footer>
        <button>Toggle Answer</button>
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
