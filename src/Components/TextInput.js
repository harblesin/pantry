import React from 'react';
import styles from "./TextInput.module.css";

const TextInput = (props) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{props.label}</label>
            <input style={{ width: `${props.width}%` }} className={`${props.className} ${styles.textInput}`} name={props.name} value={props.value} onChange={e => props.onChange(props.name, e.target.value)} placeholder={props.placeholder} />
        </div>
    );
};

export default TextInput;