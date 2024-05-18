import React, { useState } from "react";

export default function InputFields({ type, placeholder, dataTestId }) {
  const [val, setVal] = useState("");
  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };
  return (
    <input
      data-testid={dataTestId}
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={onChangeHandler}
    ></input>
  );
}
