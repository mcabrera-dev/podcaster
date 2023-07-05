import React from "react";
import "./Filter.css";

type Props = {
  value: string;
  results: number;
  name: string;
  placeholder: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField = ({
  value,
  results,
  name,
  placeholder,
  type,
  onChange,
}: Props) => (
  <div className="form-group">
    {results && (
      <label className="label" htmlFor="input-field">
        {results}
      </label>
    )}
    <input
      data-testid="filter"
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;
