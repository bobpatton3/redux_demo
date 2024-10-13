import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementSuburbanHomes,
  decrementSuburbanHomes,
  incrementHighRiseApartments,
  decrementHighRiseApartments,
  urbanSprawl,
  godzillaAttack,
} from "../actions/actions";
import { RootState } from "../reducers/rootReducer";

const DisplayState = () => {
  const dispatch = useDispatch();
  const suburbanHomes = useSelector((state: RootState) => state.suburbanHomes);
  const highRiseApartments = useSelector(
    (state: RootState) => state.highRiseApartments
  );

  return (
    <>
      <div style={styles.container}>
        <h1>Suburban Homes: {suburbanHomes}</h1>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => dispatch(incrementSuburbanHomes())}
          >
            Increment
          </button>
          <button
            style={styles.button}
            onClick={() => dispatch(decrementSuburbanHomes())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div style={styles.container}>
        <h1>High Rise Apartments: {highRiseApartments}</h1>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => dispatch(incrementHighRiseApartments())}
          >
            Increment
          </button>
          <button
            style={styles.button}
            onClick={() => dispatch(decrementHighRiseApartments())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div style={styles.container}>
        <h1>Complex Changes:</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => dispatch(urbanSprawl())}>
            Urban Sprawl
          </button>
          <button
            style={styles.button}
            onClick={() => dispatch(godzillaAttack())}
          >
            Godzilla Attack
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayState;

// Simple inline CSS styles for the buttons
const styles = {
  container: {
    padding: "10px 20px",
    margin: "10px",
    textAlign: "left" as const,
  },
  buttonContainer: {
    padding: "10px 20px",
    margin: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
