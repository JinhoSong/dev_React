import React from 'react';

const ProductList = ({ id, title, subtitle }) => {
    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>

        </div>
    );
};

export default ProductList;