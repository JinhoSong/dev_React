import React from 'react';
import { Grid } from "@material-ui/core";
import ProductCard from "components/Card/ProductCard";
import { connect } from 'react-redux';
import productStore from 'store/modules/productStore';
import { changeProductList, changeCurrentProduct } from 'store/modules/productStore';
const Posts = ({ posts, loading }) => {
  const getProductList = (object) => {
    const { id, title, subtitle, avatarSrc, imgSrc, description, nv_mid } = object;
    return (
      <Grid item xs={12} sm={4}>
        <ProductCard {...object} />
      </Grid>
    )
  }

  return (

    <Grid container spacing={4}>
      {posts.map(post => (
        getProductList(post)
      ))}
    </Grid>
  );
};

export default Posts;
