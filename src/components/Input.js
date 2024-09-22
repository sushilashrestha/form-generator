import React from 'react';

const Input = ({ type, name, label, value, onChange, options }) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'number':
      return (
        <div>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case 'select':
      return (
        <div>
          <label htmlFor={name}>{label}</label>
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    case 'textarea':
      return (
        <div>
          <label htmlFor={name}>{label}</label>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    default:
      return null;
  }
};

export default Input;