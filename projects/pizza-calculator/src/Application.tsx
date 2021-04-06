import { useReducer } from 'react';

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const calculatePizzasNeeded = ({
  numberOfPeople,
  slicesPerPerson,
  slicesPerPie
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};

const initialState: PizzaState = {
  numberOfPeople: 8,
  slicesPerPerson: 2,
  slicesPerPie: 8,
  pizzasNeeded: 2
};

const reducer = (state: any, action: any) => {
  if (action.type === 'UPDATE_NUMBER_OF_PEOPLE') {
    return addPizzasNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload
    });
  }

  if (action.type === 'UPDATE_SLICES_PER_PERSON') {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload
    });
  }

  if (action.type === 'UPDATE_SLICES_PER_PIE') {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload
    });
  }

  return state;
};

const Calculation = ({ count }: { count: any }) => {
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="caption">Pizzas Needed</p>
    </section>
  );
};

const Calculator = ({ dispatch, state }: { state: any; dispatch: any }) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        id="number-of-people"
        type="number"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_NUMBER_OF_PEOPLE',
            payload: event.target.value
          })
        }
      />
      <label htmlFor="slices-per-person">Slices Per Person</label>
      <input
        id="slices-per-person"
        type="number"
        value={state.slicesPerPerson}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_SLICES_PER_PERSON',
            payload: event.target.value
          })
        }
      />
      <label htmlFor="slices-per-Pie">Slices Per Pie</label>
      <input
        id="slices-per-Pie"
        type="number"
        value={state.slicesPerPie}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_SLICES_PER_PIE',
            payload: event.target.value
          })
        }
      />
    </form>
  );
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="calculator">
      <header>
        <h1>Pizza Calculator</h1>
      </header>
      <Calculation count={state.pizzasNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  );
};

export default Application;
