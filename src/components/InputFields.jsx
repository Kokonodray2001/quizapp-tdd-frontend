import { useEffect } from "react";

export default function InputFields({
  type,
  placeholder,
  dataTestId,
  onChangeHandler,
  val,
}) {
  useEffect(() => {
    console.log(val);
  }, [val]);
  return (
    <input
      data-testid={dataTestId}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={val}
    ></input>
  );
}
