import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from "components/redux/ProductList";
import { changeProductList } from '../store/modules/productStore';
import productStore from 'store/modules/productStore';
//import ProductList_Category from 'componets/redux/ProductList_Category';
import test from 'components/redux/test';
//C:\dev_React\project\front-end\src\components\redux\test.js
class ProductListContainer extends Component { //3

    render() {
        const { category, list } = this.props;
        const query = ("ProductList_" + category);
        //const { changeProductList } = this.props;
        //changeProductList(test.productList);
        //->강제로 넣으면 바뀌긴한다.
        //여기선 변화를 인지한다. 
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
const mapDispatchToProps = dispatch => ({
    changeProductList: list => dispatch(changeProductList(list)),
});

export default connect( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps,
)(ProductListContainer);