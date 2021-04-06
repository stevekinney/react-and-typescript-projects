import * as React from 'react';
import { DogFactType, fetchDogFacts } from './dog-facts';

type FormProps = {
  onSubmit: (n: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = React.useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={value}
          min="1"
          max="10"
          onChange={(event) => setValue(+event.target.value)}
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    });
  };

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts.map((fact, index) => (
          <Fact key={index} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default Application;
