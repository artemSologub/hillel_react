import { useDispatch } from 'react-redux';

import './MenuItem.css';
import Img from '../Img/Img';
import Button from '../Button/Button';
import { addToCart } from '../../redux/slices/couterSlice';

const MenuItem = ({ data }) => {
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
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
