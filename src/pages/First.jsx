import React from 'react';
import first from '../assets/svg/pageone.svg';
import loop from '../assets/svg/loop.svg';
import cart from '../assets/img/image copy 5.png';
import cart1 from '../assets/img/image copy 6.png';
import cart2 from '../assets/img/image copy 7.png';
import cart3 from '../assets/img/image copy 8.png';
import cart4 from '../assets/img/image copy 9.png';
import cart5 from '../assets/img/image copy 10.png';
import { useNavigate } from 'react-router-dom';

// Export deklaratsiyasi funksiyadan tashqarida bo'lishi kerak
export const fakeData = [
  {
    id: 1,
    img: cart,
    name: 'Impression 1',
    ability: 'popular',
    color: 'white and has many several types of',
    price: '$85',
  },
  {
    id: 2,
    img: cart1,
    name: 'Authentic',
    ability: 'popular',
    color: 'white and has many several types of',
    price: '$90',
  },
  {
    id: 3,
    img: cart2,
    name: 'Spark',
    ability: 'popular',
    color: 'white and has many several types of',
    price: '$95',
  },
  {
    id: 4,
    img: cart3,
    name: 'Magic',
    ability: 'popular',
    color: 'white and has many several types of',
    price: '$100',
  },
  {
    id: 5,
    img: cart4,
    name: 'White',
    ability: 'popular',
    color: 'white and has many several types of',
  },
  {
    id: 6,
    img: cart5,
    name: 'Soft',
    ability: 'popular',
    color: 'white and has many several types of',
  },
];

function First() {
  const navigate = useNavigate();

  return (
    <div className="first">
      <div className="bosh">
        <div className="textOne">
          <img src={first} alt="Page One" onClick={() => navigate('/')} />
          <p>Bridal Bouquet</p>
          <img src={loop} alt="Loop" />
        </div>
      </div>
      <p>Catalog</p>

      <div className="cards">
        {fakeData.map((item) => (
          <div key={item.id} className="card" onClick={() => navigate('/info')}>
            <img src={item.img} alt={item.name} />
            <p className="card-name">{item.name}</p>
            <span className="card-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default First;
