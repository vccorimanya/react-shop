import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API_URL) => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await axios(API_URL)
    setProducts(response.data)
  }, []);
  return products;
}

export { useGetProducts }