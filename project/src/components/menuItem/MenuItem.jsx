
import { useState } from 'react';

import './MenuItem.css';
import Img from '../img/Img';
import Button from '../button/Button';
import { PIZZA_COUNT_ACTIONS } from '../../constants/constants';

const MenuItem = ({ data }) => {
  const [addActive, setAddActive] = useState(true);
  const [count, setCount] = useState(0);

  const onToggleViewClick = () => {    
    if (!addActive) {
      setCount(0);
    }
    setAddActive(!addActive);
  }

  const onCounterClick = (action) => {
    switch(action) {    
      case PIZZA_COUNT_ACTIONS.decrease:
        if (count > 0) {
          setCount(count - 1);
        }
        break;
      case PIZZA_COUNT_ACTIONS.increase:
        setCount(count + 1);
        break;
    }
  }

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

              {!addActive &&
                <>              
                  <Button text={'-'} className={'button'} onClick={() => onCounterClick(PIZZA_COUNT_ACTIONS.decrease)} />
                  <div class="pizza_count">{count}</div>
                  <Button text={'+'} className={'button'} onClick={() => onCounterClick(PIZZA_COUNT_ACTIONS.increase)} />
                  <Button text={'Delete'} className={'button'} onClick={() => onToggleViewClick()} />
                </>}

              {addActive && 
                <Button text={'Add to cart'} className={'button'} onClick={() => onToggleViewClick()} />}
            </>
          }          
        </div>
      </div>
    </li>
  );
}

export default MenuItem;