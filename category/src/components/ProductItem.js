import React from "react";
import styled from "styled-components";

const ProductItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const ProductItem = ({ object }) => {
  const { id, title, subtitle } = object;
  return (
    <div className="contents">
      <h2>
        <a>{id}</a><br></br>
        <a>{title}</a><br></br>
        <a>{subtitle}</a>
      </h2>
    </div>
  )
};

export default ProductItem;
