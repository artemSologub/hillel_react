import './Button.css';

const Button = ({ buttonName, buttonClass, onClick }) => {
  return (
    <button class={buttonClass} onClick={onClick}>{buttonName}</button>
  );
}

export default Button;