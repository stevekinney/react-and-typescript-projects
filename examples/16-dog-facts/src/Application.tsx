import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

const Form = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value="3" min="1" max="10" id="number-of-facts" />
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
  return (
    <main>
      <Form />
      <section></section>
    </main>
  );
};

export default Application;
