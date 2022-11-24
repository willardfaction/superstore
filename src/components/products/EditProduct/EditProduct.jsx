import React, { useState, useEffect } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } = useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = e => {
    if(e.target.name === 'price'){
        let obj = {
            ...product,
            price: Number(e.target.value)
        };
        setProduct(obj);
    } else {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        };
        setProduct(obj);
    };
  };

  return (
    <>
      {product ? (
        <>
        <h2>Add Product</h2>

        <input type="text" value={product.name} placeholder="Title" name="name" onChange={handleInp} /><br />
        <input type="text" value={product.description} placeholder="Description" name="description" onChange={handleInp} /><br />
        <input type="number" value={product.price} placeholder="Price" name="price" onChange={handleInp} /><br />
        <input type="text" value={product.picture} placeholder="Picture" name="picture" onChange={handleInp} /><br />
        <input type="text" value={product.type} placeholder="Type" name="type" onChange={handleInp} /><br />

        <button onClick={() => {
            saveEditedProduct(product);
            navigate('/products');
        }}>Save Changes</button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  )
}

export default EditProduct