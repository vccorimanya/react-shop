import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext';
const OrderItem = ({title, price, image,id}) => {

  const { removeFromCart } = useContext(AppContext)

  const handleClose = (id) => {
    removeFromCart(id)
  }

  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt="bike" />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={closeIcon} onClick={() => handleClose(id)} alt="close" />
    </div>
  );
}

export {OrderItem};