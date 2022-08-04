import React from 'react';

const Input = ({ tag, label, forLabel, type, name, id, placeholder, autocomplete, required, value, cols, rows }) => {
  const input = (
    <input
      className="text-indigo-50 bg-transparent border-0 border-b-2 border-indigo-800 mb-2"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete={autocomplete}
      required={required}
      value={value}
    />
  );
  const texArea = <textarea className="text-indigo-50 bg-transparent border-2 border-indigo-800 custom-container relative" name={name} id={id} cols={cols} rows={rows}></textarea>;

  return (
    <p className="flex flex-col">
      <label htmlFor={forLabel} className="text-indigo-50">
        {label}
      </label>
      {tag === 'textarea' ? texArea : input}
    </p>
  );
};

export default Input;
