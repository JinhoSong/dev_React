import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";
import Constants from "./Constants"
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    const PRODUCT_API_BASE_URL = "http://localhost:8080/products";
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=65f1fcd7213a4d2599969235aca64fe8`
    );
  }, [category]);

  /*
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=65f1fcd7213a4d2599969235aca64fe8`
  );
  */
  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (

    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>

  );
};
// category.url 로 연결하고 catrgory 전달
export default NewsList;
