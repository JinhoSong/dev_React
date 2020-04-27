import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";
import productList from "./constants";
import ProductPromise from "lib/ProductPromise"
import axios from "axios";
//ProductList.js와는 다른거다 헷깔리지말자!
/*
const Content = ({ category }) => {
  const [loading, response, error] = ProductPromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return (
      productList.map((object) => getProductList(object, category))
    );
  }, [category]);

  const getProductList = (object, category) => {
    const { category, price, description, avatarSrc, imgSrc } = object;
    return (
      <div>
        {this.object.category === category} ? (
        <Grid item xs={12} sm={4}>
          <ProductCard {...object} />
        </Grid>) : (<div>x</div>)
      </div>
    );
  };
  //카드한장씩 리턴하는 함수 


  const { object } = response.data;
  return (

    <Grid container spacing={4}>
      {productList.map((object) => getProductList(object))}
    </Grid>
  );
};



*/



const Content = ({ category }) => {
  const getProductList = (object) => {
    const { category, price, description, avatarSrc, imgSrc } = object;
    return (
      <Grid item xs={12} sm={4}>
        <ProductCard {...object} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {productList.map((object) => getProductList(object))}
    </Grid>
  );
};

export default Content;
