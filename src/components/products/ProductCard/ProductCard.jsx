import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useCart } from '../../../contexts/CartContextProvider';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const { deleteProduct } = useProducts();
    const { addProductToCart } = useCart();

  return (
    <div>
        {item.name} {item.price}
        <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
        <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        <button onClick={() => deleteProduct(item.id)}>Delete</button>
        <button onClick={() => addProductToCart(item)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard