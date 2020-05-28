import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import HighLighter from "../components/test";


const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || "all";
  const opts = [{
    caseSensitive: true, //true or false
    highlightClass: 'highlighted-text', // className for your highlighted text
  }]
  return (
    <>
      <HighLighter />
      {/* <Categories />
      <NewsList category={category} /> */}
    </>
  );
};

export default NewsPage;
