import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Cart.css';
import {
  increment,
  decrement,
  deleteFromCart,
  resetCart,
} from '../../redux/slices/couterSlice';
import Button from '../Button/Button';
import { PIZZA_COUNT_ACTIONS } from '../../constants/constants';

const Cart = () => {
  const cartItemsList = useSelector((state) => state.cartSate.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };
  const handleNavigateNewOrder = () => {
    navigate('/order/new');
  };
  const handleResetCart = () => {
    dispatch(resetCart());
  };

  return (
    <>
      <h3>
        Your cart {cartItemsList?.length ? `, ${cartItemsList?.length}` : ''}
      </h3>
      <div>
        {cartItemsList.map((cartItem) => (
          <div className="cart__row" key={cartItem.id}>
            <div>{cartItem.count}x</div>
            <div>{cartItem.name}</div>
            <div>{cartItem.unitPrice}</div>
            <Button text={'-'} onClick={() => handleDecrement(cartItem.id)} />
            <Button text={'+'} onClick={() => handleIncrement(cartItem.id)} />
            <Button
              text={PIZZA_COUNT_ACTIONS.delete}
              onClick={() => handleDeleteFromCart(cartItem.id)}
            />
          </div>
        ))}
      </div>
      {cartItemsList.length ? (
        <div>
          <Button text={'Order'} onClick={() => handleNavigateNewOrder()} />
          <Button text={'Clear'} onClick={() => handleResetCart()} />
        </div>
      ) : null}
    </>
  );
};

export default Cart;
