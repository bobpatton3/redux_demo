import { combineReducers } from "@reduxjs/toolkit";
import suburbanHomesReducer from "./suburbanHomesReducer";
import highRiseApartmentsReducer from "./highRiseApartmentsReducer";

export const rootReducer = combineReducers({
    suburbanHomes: suburbanHomesReducer,
    highRiseApartments: highRiseApartmentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
