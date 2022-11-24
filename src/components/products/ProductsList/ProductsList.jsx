import React, { useEffect, useState } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';

const ProductsList = ({ page, setPage, changeSideBarStatus }) => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    const itemsOnPage = 6;

    const count = Math.ceil(products.length / itemsOnPage);

    const handlePage = (e, p) => {
        setPage(p);
    };

    function currentData(){
        const begin = (page - 1) * itemsOnPage;
        const end = begin + itemsOnPage;
        return products.slice(begin, end);
    };

  return (
    <div>
        <h3>Products List</h3>

        <button onClick={changeSideBarStatus}>Filter&Search Menu</button>

        {products ? (
            currentData().map(item => (
                <ProductCard key={item.id} item={item} />
            ))
        ) : (
            <h3>Loading...</h3>
        )}
        <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  )
}

export default ProductsList