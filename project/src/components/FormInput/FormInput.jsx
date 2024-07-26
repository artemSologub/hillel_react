import { forwardRef } from 'react';
import './FormInput.css';

const FormInput = forwardRef((props, ref) => {
  const {
    onChange,
    onBlur,
    value,
    type = 'text',
    placeholder,
    label,
    error,
  } = props;

  return (
    <>
      <div className="order-input">
        <label>{label}</label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <div className="text-red">{error && error.message}</div>
    </>
  );
});

export default FormInput;
