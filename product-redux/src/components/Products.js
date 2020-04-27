import React from 'react';

const ProductItem = ({ product, onToggle, onClick }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제</span>
            <button>클릭</button>
        </div>
    );
};

const Products = ({
    title,
    category,
    onClick,
    onInsert,
    onToggle,
    onChangeInput,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>

            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
};

export default Products;