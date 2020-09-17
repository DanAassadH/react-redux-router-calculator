import React from "react";

function Home() {
  return (
    <>
      <h2>Introduction </h2>
      <ul>
        <li>
          This calculator is developed using web-development technologies namely{" "}
          <strong>JSX</strong>, <strong>React</strong>, <strong>Redux</strong>,{" "}
          <strong>CSS</strong>. This application is meant to test understanding
          of React Router (the react-router-dom package) in the context of a
          React-Redux app.
        </li>
      </ul>

      <h2>Working:</h2>
      <ul>
        <li>
          This calculator includes two input fields that can take in numeric
          values,and returns the answer using React component. It also includes
          a select (drop down box) which allows the user to choose what
          operation to perform.
        </li>

        <li>
          The <strong>Previous Calculations</strong> outputs a list of
          prior calculations the user has done in and from React-Redux store. 
        </li>
        <li>
          The pages are displayed Using React Router. To have a page for the
          calculator and a page for prior calculations (via Routes.)
        </li>
      </ul>
      <h2>Some additional features:</h2>
      <ul>
        <li>
          Another calculator that have a single input field which can read the
          complex operations and return the calculated answer again using React.
          .{" "}
        </li>
        <li>
          Return a message to the user if the user inputs a non-numeric
          character.
        </li>
      </ul>
    </>
  );
}

export default Home;
