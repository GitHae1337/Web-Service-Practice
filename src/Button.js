import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  // CSS 코드를 선택적으로 Component에 적용
  return <button className={styles.btn}> {text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
