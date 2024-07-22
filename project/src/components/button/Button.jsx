import './Button.css';

const Button = ({ text, className, onClick }) => {
  return (
    <button class={className} onClick={onClick}>{text}</button>
  );
}

export default Button;