import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={styles.buttonContainer}>
            <button style={{ width: `${props.width}%` }} className={styles.button} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}


export default Button;