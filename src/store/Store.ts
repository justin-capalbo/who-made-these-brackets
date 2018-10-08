import { Store, createConnectedStore } from 'undux'

// Declare types for the store
interface State { 
  num1: number,
  num2: number
}

// Define the initial value for the store
const initialState: State = {
  num1: 1,
  num2: 2
}

// Create a store with an initial value.
export default createConnectedStore(initialState);

// Export store props for typescript/react
export interface StoreProp {
  store: Store<State>;
}

