import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          Pizza Day
        </Link>
        <Link className="logo" to="/cart">
          Cart
        </Link>
        <form>
          <Input inputPlaceholder={'Search for the order #'} />
        </form>
      </header>
    </>
  );
};

export default Header;
