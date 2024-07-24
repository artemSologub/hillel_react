import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MenuItem.css';
import Img from '../Img/Img';
import Button from '../Button/Button';
import { PIZZA_COUNT_ACTIONS } from '../../constants/constants';
import { addToCart } from '../../redux/slices/couterSlice';

const MenuItem = ({ data }) => {
  // const [addActive, setAddActive] = useState(true);
  // const [count, setCount] = useState(0);

  // const onToggleViewClick = () => {
  //   if (!addActive) {
  //     setCount(0);
  //   }
  //   setAddActive(!addActive);
  // };

  // const onCounterClick = (action) => {
  //   switch (action) {
  //     case PIZZA_COUNT_ACTIONS.decrease:
  //       if (count > 0) {
  //         setCount(count - 1);
  //       }
  //       break;
  //     case PIZZA_COUNT_ACTIONS.increase:
  //       setCount(count + 1);
  //       break;
  //   }
  // };
  const dispatch = useDispatch();

  return (
    <li className="pizza">
      <Img imgSrc={data.imageUrl} classNameName={'pizza__image'} />
      <div className="pizza__info">
        <p className="pizza__name">{data.name}</p>
        <p className="pizza__ingredients">
          {data.ingredients.map((ingr, index) => {
            <span key={index}>{ingr}</span>;
          })}
        </p>
        <div className="pizza__actions">
          {data.soldOut ? (
            <p className="pizza__price">Sold out</p>
          ) : (
            <>
              <p className="pizza__price">{data.unitPrice}</p>
              <Button
                text={'Add to cart'}
                classNameName={'button'}
                onClick={() => dispatch(addToCart(data))}
              />

              {/* {!addActive && (
                <>
                  <Button
                    text={'-'}
                    classNameName={'button'}
                    onClick={() => onCounterClick(PIZZA_COUNT_ACTIONS.decrease)}
                  />
                  <div className="pizza_count">{count}</div>
                  <Button
                    text={'+'}
                    classNameName={'button'}
                    onClick={() => onCounterClick(PIZZA_COUNT_ACTIONS.increase)}
                  />
                  <Button
                    text={'Delete'}
                    classNameName={'button'}
                    onClick={() => onToggleViewClick()}
                  />
                </>
              )} */}

              {/* {addActive && (
                <Button
                  text={'Add to cart'}
                  classNameName={'button'}
                  onClick={() => onToggleViewClick()}
                />
              )} */}
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
