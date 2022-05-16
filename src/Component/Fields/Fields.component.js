const Fields = ({ value, name, placeholder, type, maxLength, onChange }) => {
  return (
    <div className="field-wrapper">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        autoComplete={"off"}
        maxLength={maxLength && maxLength}
        onChange={onChange}
      />
    </div>
  );
};

export default Fields;
