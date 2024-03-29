import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    {
        name: "all",
        text: "전체보기"
    },
    {
        name: "mouse",
        text: "마우스"
    },
    {
        name: "notebook",
        text: "노트북"
    },
    {
        name: "sunCream",
        text: "썬크림"
    },
    {
        name: "skin",
        text: "스킨"
    }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === "all"}
                    to={c.name === "all" ? "/" : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
