import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card m-2">
      <img
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        className="card-img-top"
        alt="Product"
      />
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Fancy Product', price: '$40.00-$80' },
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true },
    { name: 'Sale Item', price: '$25', isSale: true },
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00' },
    { name: 'Sale Item', price: '$25', isSale: true },
    { name: 'Fancy Product', price: '$40.00-$80' },
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true },
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00' },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
