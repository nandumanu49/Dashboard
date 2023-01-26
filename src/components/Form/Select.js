import React, { useRef } from "react";

const Select = ({ name, data, returnFilter }) => {
  const selectRef = useRef("");
  const handleChange = (e) =>
    name === selectRef.current.value
      ? returnFilter([name, ""])
      : returnFilter([name, selectRef.current.value]);
  return (
    <>
      <select
        ref={selectRef}
        onChange={handleChange}
        className="form-select form-select-sm p-2 m-2 d-inline-block"
        style={{ maxWidth: "200px" }}
      >
        <option value={name}>{name}</option>
        {data &&
          Object.keys(data).map((name, index) => (
            <option key={index}>{name}</option>
          ))}
      </select>
    </>
  );
};

export default Select;