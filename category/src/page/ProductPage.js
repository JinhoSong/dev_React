import React, { useState, useCallback } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList'
import Categories from '../components/Categories'
const ProductPage = () => {

    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <div>
            <Categories />
            <ProductList />

        </div>
    );
};

export default ProductPage;