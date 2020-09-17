import React, { useState } from "react"; // https://reactjs.org/docs/hooks-state.html
import { create, all } from "mathjs"; //https://mathjs.org/index.html

import {connect} from 'react-redux';
import addNewResult from '../actions/resultList';

function SingleFieldCalculator(props) {
  /* Initialize hooks */
  const [firstNumber, getFirstNumber] = useState("");
  const [result, getResult] = useState("0");

  /* Function called on submit button press */
  const calculateMathOperation = (event) => {
    event.preventDefault();

    try {       
            const math = create(all); //https://mathjs.org/docs/core/extension.html
            const x = math.evaluate(firstNumber); // using math.evaluate for expression evaluation
            getResult(x); 
            const resultStatement = `${firstNumber}  = ${x} `;
            props.dispatch(addNewResult(resultStatement))       
      }
       catch (err) {
        alert('Please Enter a Number');
      }

  };

  return (
    <div className="complex">
      <h2>Expression calculator</h2>

      <form onSubmit={calculateMathOperation}>
        <label htmlFor="expression"> Enter Expression</label>

        <input
          type="text"
          id="expression"
          value={firstNumber}
          onChange={(e) => {
            getFirstNumber(e.target.value);
          }}
        ></input>

        <input type="submit" value="Calculate"></input>
        <input
          type="button"
          value="Clear"
          onClick={(e) => {
            getFirstNumber("");
            getResult("");
          }}
        ></input>
      </form>
      <p>
         {firstNumber} = {result}
      </p>
    </div>
  );
}

export default connect((state) => {return { someResult: state };})(SingleFieldCalculator);