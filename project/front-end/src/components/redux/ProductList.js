import React from 'react';
import { Grid } from "@material-ui/core";
import ProductCard from "components/Card/ProductCard";
import ProductList_Category from './ProductList_Category';

const ProductList = ({ category, list }) => {
    const getProductList = (object) => {
        const { id, title, subtitle, avatarSrc, imgSrc, description } = object;

        return (
            <Grid item xs={12} sm={4}>
                <ProductCard {...object} />
            </Grid>
        )
    }

    const cat = ({
        category: category,
    })
    //console.log(">>>." + JSON.stringify(list));
    //container에서 넘어온 객체를 표현해주는 곳
    function handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    return (
        <div>
            <p>ProductList from {category}</p>
            <Grid container spacing={4}>
                {list.map((products) => getProductList(products))}
            </Grid>
        </div>
        // <div>
        //     <h1>카테고리 : {category}</h1>
        //     <Grid container spacing={4}>
        //         {list.map((products) => getProductList(products))}
        //     </Grid>
        // </div>
    );
};

export default ProductList;