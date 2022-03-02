import React from 'react';
import {ProductItem} from '../components/ProductItem';
import '../styles/ProductList.scss';
import {useGetProducts} from '../hooks/useGetProducts.js'

const API_URL = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

  const products = useGetProducts(API_URL)

  return (
    <section className="main-container">
      <div className="ProductList">
        {
          products.map((item) => (
            <ProductItem
            key={item.id}
            product={item}
            />
          ))
        }
      </div>
    </section>
  );
}

export {ProductList};