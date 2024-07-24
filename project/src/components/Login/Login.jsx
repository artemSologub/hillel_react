import Input from '../Input/Input';
import Button from '../Button/Button';
import './Login.css';

const Login = () => {
  return (
    <>
      <h1 className="title">
        The best pizza.
        <br />
        <span className="text-yellow">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <p className="sub-title">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form className="login-form">
        <Input inputType={'text'} inputPlaceholder={'Your full name'} />
        <Button text={'Login'} />
      </form>
    </>
  );
};

export default Login;
