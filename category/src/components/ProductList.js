import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";


const ProductListBlock = styled.div`
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

const ProductList = ({ category }) => {

    const [data, setData] = useState(null);
    const PRODUCT_API_BASE_URL = "http://localhost:8080/products";
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //asnyc를 사용하는 함수 따로 선언
        const fetchData = async () => {
            const query = category === 'all' ? '' : '';
            setLoading(true);
            try {
                const response = await axios.get(PRODUCT_API_BASE_URL);

                setData(response.data);

            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <ProductListBlock>대기중</ProductListBlock>
    }
    if (!data) {
        return (
            null
        )
    }
    return (
        <div>
            <ProductListBlock>
                {data.map(object => (
                    <ProductItem object={object} />
                ))}

            </ProductListBlock>


        </div>
    )
}


/*
const ProductList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

    const onClick = () => {
        axios.get(PRODUCT_API_BASE_URL).then(response => {
            setData(response.data);
        });
    };


    return (
        <div>
            <div>
                <button onClick={onClick} > asdfasdf</button>
            </div>
            {data && <textarea rows={100} value={JSON.stringify(data, null, 2)} />}
            <div>

            </div>
        </div>
    );
};
*/
export default ProductList;
