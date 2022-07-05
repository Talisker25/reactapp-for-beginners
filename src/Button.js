import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text, onClickFunc}) {
    return <button className={styles.btn} onClick={onClickFunc}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick : PropTypes.func

}
export default Button;