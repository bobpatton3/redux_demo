import { INCREMENT_SUBURBAN, DECREMENT_SUBURBAN, URBAN_SPRAWL, GODZILLA_ATTACK } from '../actions/actions';

const initialState = 1000;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const suburbanHomesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_SUBURBAN:
      return state + 1;
    case DECREMENT_SUBURBAN:
      return Math.max(state - 1, 0);
    case URBAN_SPRAWL:
      return Math.max(state - 20, 0);
    case GODZILLA_ATTACK:
      return Math.max(state - 5, 0);
    default:
      return state;
  }
};

export default suburbanHomesReducer;
