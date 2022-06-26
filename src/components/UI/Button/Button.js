import React from "react";

//Below import is for styled components.
//import styled from "styled-components";

//Below import is for normal css used in react component.
//import "./Button.css";

//Below import used for css module.
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

/**
 *
 * Creating styled component.
 * styled.button will return a button component with styles attached.
 * For normal css style directly on button, do not use any class name or id.
 * For psuedo classes, use &:focus, &:hover etc.
 *
 * Commenting styled component button as we are using CSS modules.
 */
/*
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
*/

/**Using styled-component package above instead of this older
 * implementation of custom button.
 */
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
