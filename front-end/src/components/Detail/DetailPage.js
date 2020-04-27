import React from "react";
import ProductCard from "../Card/ProductCard"
import Categories from "./Sections/Categories";
import Content from "../Card/Content";


const DetailPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || "all";
    return (
        <>
            <Categories />
            <Content category={category} />
        </>
    );
};

export default DetailPage;
