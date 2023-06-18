import { useState, useRef } from "react";

import styles from "./Input.module.scss";

export default function Input({ label, name, formData, setFormData }) {
  const [isFocused, setIsFocused] = useState(false),
    inputRef = useRef(null),
    [inputContent, setInputContent] = useState('');

  return (
    <div className={styles.container}>
      <div
        className={`${styles.input_container} ${
          isFocused ? styles.focused : styles.hover
        }`}
      >
        <div
          className={`${styles.label} ${
            isFocused ? styles.focused : inputContent !== '' && styles.filled
          }`}
          style={{
            top: isFocused ? "8px" : inputContent !== '' ? "8px" : "17.5px",
            left: isFocused ? "1rem" : inputContent !== '' ? "1rem" : "1.6rem",
          }}
        >
          {label}
        </div>
        <input
          className={`${styles.input} ff-text`}
          name={name}
          onClick={() => inputRef.current.focus()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onInput={(e) => {
            setInputContent(e.target.value)
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          value={inputContent}
          type="text"
          ref={inputRef}
        />
      </div>
    </div>
  );
}
