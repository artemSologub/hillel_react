import './Input.css';

const Input = ({ inputType = 'text', inputPlaceholder = '...' }) => {
  return (
    <input type={inputType} placeholder={inputPlaceholder} />
  );
}

export default Input;