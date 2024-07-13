import './MenuItem.css';
import Img from '../img/Img';
import Button from '../button/Button';

const MenuItem = ({ data, onClick }) => {
  return (
    <li class="pizza">
      <Img imgSrc={data.imageUrl} className={'pizza__image'} />
      <div class="pizza__info">
        <p class="pizza__name">{data.name}</p>
        <p class="pizza__ingredients">
          {data.ingredients.map((ingr, index) => {
            <span key={index}>{ingr}</span>
          })}
        </p>
        <div class="pizza__actions">
          {data.soldOut ? 
            <p class="pizza__price">Sold out</p> :
            <>            
              <p class="pizza__price">{data.unitPrice}</p>
              <Button buttonName={'Add to cart'} buttonClass={'button'} onClick={onClick} />
            </>
          }          
        </div>
      </div>
    </li>
  );
}

export default MenuItem;