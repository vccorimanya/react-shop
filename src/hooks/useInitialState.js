import { useState } from "react";

const initialState = {
  cart: [],
}
/* -->para mantener la información el estado anterior */
/* ...state.cart es usado para mantener los elementos exitentes */
/* product agrega el nuevo elemento al array que normalmente se llama payload */
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
    }

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id != id)
    });
    }

    return {
      state,
      addToCart,
      removeFromCart
  }
}

export {useInitialState}