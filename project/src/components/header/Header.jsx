import Input from '../input/Input';
import './Header.css';

const Header = () => {
  return (
    <>
      <header class="header">
        <a class="logo" href="/">Pizza Day</a>
        <form>
          <Input inputPlaceholder={'Search for the order #'} />
        </form>
      </header>
    </>
  );
}

export default Header;