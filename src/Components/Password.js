import React from "react";
import styles from "./Password.module.css";

const Password = (props) => {
    return (
        <div className={styles.passwordContainer}>
            <label className={styles.passwordLabel}>{props.label}</label>
            <input style={{ width: `${props.width}%` }} type="password" className={`${styles.passwordInput} ${props.className}`} name={props.name} value={props.value} onChange={e => props.onChange(props.name, e.target.value)} placeholder={props.placeholder} />
        </div>
    )
}

export default Password;