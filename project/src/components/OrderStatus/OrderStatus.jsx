import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOrderById } from '../../redux/slices/ordersSlice';
import './OrderStatus.css';

const OrderStatus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.ordersState.currentOrder);

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  return (
    <div>
      {order ? (
        <>
          <h1 className="order-row">
            <span>
              Order #{order.id} status: {order.status}
            </span>
            {order.priority && <b>Priority!</b>}
          </h1>
          <div className="order-row">
            <span>Estimated Delivery:</span>
            <span>{order.estimatedDelivery}</span>
          </div>
          {order.cart?.length > 0 && (
            <div>
              {order.cart.map((item) => (
                <div key={item.pizzaId} className="order-row">
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>${item.totalPrice}</span>
                </div>
              ))}
            </div>
          )}
          <div className="order-row">
            <span>Price pizza:</span>
            <span>${order.orderPrice}</span>
          </div>
          {order.priorityPrice > 0 && (
            <div className="order-row">
              <span>Price priority:</span>
              <span>${order.priorityPrice}</span>
            </div>
          )}
          <div className="order-row">
            <span>To pay on delivery:</span>
            <span>${order.orderPrice + order.priorityPrice}</span>
          </div>
        </>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderStatus;
