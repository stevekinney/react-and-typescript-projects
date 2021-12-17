import { useReducer } from 'react';

// **create Pizza Data Type to calculate the # of pizza needed
type PizzaData = {
  numOfPeople: 0;
  numOfSlicePerPerson: number;
  numOfSlicePerPizza: number;
};
// **create a function to calculated the number of pizza needed
const numOfPizzaNeed = ({
  numOfPeople,
  numOfSlicePerPerson,
  numOfSlicePerPizza
}: PizzaData): number => {
  return Math.ceil((numOfPeople * numOfSlicePerPerson) / numOfSlicePerPizza);
};

// 1. create state type
type PizzaState = {
  numOfPeople: number;
  numOfSlicePerPerson: number;
  numOfSlicePerPizza: number;
  numOfPizzaNeed: number;
};
// 2. create action type
type IncrementPeople = { type: 'INCREMENT_PEOPLE' };
type IncrementSlicePerPerson = { type: 'INCREMENT_SLICE_PER_PERSON' };
type IncrementSlicePerPizza = { type: 'INCREMENT_SLICE_PER_PIZZA' };

// 3. create initial state
const pizzaState = {
  numOfPeople: 0,
  numOfSlicePerPerson: 0,
  numOfSlicePerPizza: 0,
  numOfPizzaNeed: 0
};

// ** create a function to update the pizza state, passing the Pizza Data and return Pizza data + return data from numOfPizzaNeed(data)
const updatePizzaState = (data: PizzaData) => {
  return {...data, numOfPizzaNeed: numOfPizzaNeed(data)}
}

// 4. create reducer function, that will be used in the useReducer() function
// reducer function is using to update the pizza state based on the action was dispatched
const reducer = (currentState: PizzaData, action: any) => {

  switch(action.type){
    case 'INCREMENT_PEOPLE':
      return updatePizzaState({
        ...currentState,
        numOfPeople: action.payload
      });
      break;
    case 'INCREMENT_SLICE_PER_PERSON':
      return updatePizzaState({
        ...currentState, 
        numOfSlicePerPerson: +action.payload
      });
      break;
    case 'INCREMENT_SLICE_PER_PIZZA':
      return updatePizzaState({
        ...currentState,
        numOfSlicePerPizza: action.payload
      })
  }
}
// 5. create child component 1
// 6. create child component 2
// 7. create parent component
const Application = () => {};
export default Application;
