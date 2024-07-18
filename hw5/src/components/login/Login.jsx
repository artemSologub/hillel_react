import Input from '../input/Input';
import Button from '../button/Button';
import './Login.css';

const Login = () => {
  return (
    <>
      <h1 class="title">
        The best pizza.<br />
        <span class="text-yellow">Straight out of the oven, straight to you.</span>
      </h1>
      <p class="sub-title">👋 Welcome! Please start by telling us your name:</p>
      <form class="login-form">
        <Input inputType={'text'} inputPlaceholder={'Your full name'} />
        <Button buttonName={'Login'} />
      </form>
    </>    
  );
}

export default Login;