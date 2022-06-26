import React, { useState } from "react";

/**Below is for styled components. Scoped.   */
import styled from "styled-components";
import Button from "../../UI/Button/Button";
/**Below is for css module. Scoped. */
import styles from "./CourseInput.module.css";

/**Below is for normal css which is not scoped.  */
import "./CourseInput.css";

/**Below styled-component is replaced with css modules.  */
/*
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    // border: 1px solid #ccc;    //this is a comment. styled component comments does not change color somehow.
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  /*alternate css rules for the inline styles applied in CourseInput.js
  Commented because we used dynamic style using props in the input and label. 
  Based on the invalid input. 
  
  // &.invalid input {
  //   border-color: red;
  //   background: #ffd7d7;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;*/

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Applying inline style in below code. 
        Inline style are not good as they override the existing styles.  */}
      {/*
      <div className="form-control">
        
         <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}

      {/* Alternative approach of inline css. 
      We have added rules in the css file and now 
      we will assign those rules dynamically
      int the parent.  */}
      {/* 
      Replaced with the styled component FormControl. 
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}

      {/* 
      Without using props applying dynamic style. 
      <FormControl className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}

      {/* Using props to apply dynamic styling.  
      It is commented as we are using css module below. 
      */}
      {/* <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}

      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
