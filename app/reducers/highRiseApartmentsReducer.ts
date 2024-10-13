import { INCREMENT_APARTMENTS, DECREMENT_APARTMENTS, URBAN_SPRAWL, GODZILLA_ATTACK } from '../actions/actions';

const initialState = 100;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const highRiseApartmentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_APARTMENTS:
      return state + 1;
    case DECREMENT_APARTMENTS:
      return state - 1;
    case URBAN_SPRAWL:
      return state + 5;
    case GODZILLA_ATTACK:
      return state - 50;
    default:
      return state;
  }
};

export default highRiseApartmentsReducer;