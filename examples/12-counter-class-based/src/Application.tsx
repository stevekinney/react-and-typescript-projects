import { number, string } from 'prop-types';
import { ChangeEvent, Component } from 'react';

type PropsCounter = {
  incident: string;
};

type StateCounter = {
  counter: number;
};

class Counter extends Component<PropsCounter, StateCounter> {
  State: StateCounter = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState((props) => ({
      counter: props.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1
    }));
  };

  resetCounter = () => {
    this.setState(() => ({ counter: 0 }));
  };

  changeCounter = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState(() => ({ counter: +event.target.value }));

  render() {
    const { incident } = this.props;
    const { counter } = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last Incident {incident}</h1>
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.resetCounter}>Reset</button>
          <button onClick={this.resetCounter}>Decrement</button>
        </section>
        <section className="controls">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="set-to">Set Count</label>
            <input
              id="set-to"
              type="number"
              onChange={this.changeCounter}
              value={counter}
            />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident={'hello world'} />;
  }
}

export default Application;
