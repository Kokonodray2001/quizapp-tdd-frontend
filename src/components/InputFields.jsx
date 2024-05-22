export default function InputFields({
  type,
  placeholder,
  dataTestId,
  onChangeHandler,
  val,
}) {
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
