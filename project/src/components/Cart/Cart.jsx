import { useSelector, useDispatch } from 'react-redux';

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
            <Button
              text={'-'}
              onClick={() => dispatch(decrement(cartItem.id))}
            />
            <Button
              text={'+'}
              onClick={() => dispatch(increment(cartItem.id))}
            />
            <Button
              text={PIZZA_COUNT_ACTIONS.delete}
              onClick={() => dispatch(deleteFromCart(cartItem.id))}
            />
          </div>
        ))}
      </div>
      {cartItemsList.length ? (
        <div>
          <Button text={'Order'} />
          <Button text={'Clear'} onClick={() => dispatch(resetCart())} />
        </div>
      ) : null}
    </>
  );
};

export default Cart;
