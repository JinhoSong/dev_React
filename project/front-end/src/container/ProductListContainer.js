import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from "components/redux/ProductList";
import { changeProductList } from '../store/modules/productStore';
import productStore from 'store/modules/productStore';
//import ProductList_Category from 'componets/redux/ProductList_Category';

class ProductListContainer extends Component { //3
    // handleSelect = list => {
    //     const { changeProductList } = this.props;
    //     changeProductList(list);
    // };

    render() {
        const { category, list } = this.props;
        // const query = "ProductList_" + { category };
        // console.log("query >>" + query);
        console.log(">>>." + JSON.stringify(list))
        return (
            < >
                <ProductList category={category} list={list} />
            </>

        );
    }
}
const mapStateToProps = ({ productStore }) => ({  //2
    category: productStore.category,
    list: productStore.productList,

});
//import store name이 맞는거다 

//props로 넣어줄 액션 생성함수
// const mapDispatchToProps = dispatch => ({
//     changeProductList: list => dispatch(changeProductList(list)),
// });

export default connect( // 스토어와 연결
    mapStateToProps,
    // mapDispatchToProps,
)(ProductListContainer);