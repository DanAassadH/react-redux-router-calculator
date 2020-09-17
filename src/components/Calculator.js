import React, { useState } from "react"; // https://reactjs.org/docs/hooks-state.html
import { connect } from "react-redux";
import addNewResult from "../actions/resultList";

function DisplayCalculator(props) {
  /* Initialize hooks */
  const [firstNumber, getFirstNumber] = useState("");
  const [secondNumber, getSecondNumber] = useState("");
  const [operation, getOperation] = useState("+");
  const [result, getResult] = useState("0");
  let calculatedValue = 0;

  /* Function called on submit button press */
  const calculateMathOperation = (event) => {
    event.preventDefault();
    try {
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error("Please Enter a Number");
      } else {
        calculatedValue = calculation(firstNumber, operation, secondNumber);
        getResult(
          `Result of ${firstNumber} ${operation} ${secondNumber} is ${calculatedValue} `
        );
        const resultStatement = `${firstNumber} ${operation} ${secondNumber} = ${calculatedValue} `;
        props.dispatch(addNewResult(resultStatement));
      }
    } catch (err) {
      alert(err.message);
    }

    getFirstNumber("");
    getSecondNumber("");
  };

  return (
    <>
      <div className="simple">
        <h2>Simple Calculator</h2>

        <form onSubmit={calculateMathOperation}>
          <label htmlFor="first-number"> Input 1:</label>

          <input
            type="text"
            id="first-number"
            autocomplete="off"
            value={firstNumber}
            onChange={(e) => {
              getFirstNumber(e.target.value);
            }}
          ></input>

          <label htmlFor="operations"> Operation:</label>

          <select
            name="calculate"
            id="operations"
            value={operation}
            onChange={(e) => {
              getOperation(e.target.value);
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>

          <label htmlFor="second-number"> Input 2:</label>

          <input
            type="text"
            id="second-number"
            autocomplete="off"
            value={secondNumber}
            onChange={(e) => {
              getSecondNumber(e.target.value);
            }}
          ></input>

          <input type="submit" value="Calculate"></input>
        </form>
        <p>{result}</p>
      </div>
    </>
  );
}

/* Function to perform arithmatic operation +,-,*,/  */

function calculation(firstNumber, operation, secondNumber) {
  let result = 0;

  if (operation === "+") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  }
  if (operation === "-") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  }
  if (operation === "*") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  }
  if (operation === "/") {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }

  return result;
}

export default connect((state) => {
  return { someResult: state };
})(DisplayCalculator);
