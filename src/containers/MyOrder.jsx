import React, { useContext } from 'react';
import {OrderItem} from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/MyOrder.scss';
import flechita from '@icons/flechita.svg'
const MyOrder = () => {

  const {state} = useContext(AppContext)

 /*  let totalPrice = 0
  state.cart.forEach(element => {
    totalPrice += element.price
  }); */

  const totalPrice = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer,0)
    return sum
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {
          state.cart.map((item) => (
            <OrderItem
              key={`orderItem-${item.id}`}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.images[0]}
            />
          ))
        }
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export {MyOrder};