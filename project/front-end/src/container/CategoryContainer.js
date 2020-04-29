import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from 'components/redux/Category';
import ApiService from "ApiService";
import { changeCategory } from '../store/modules/productStore';
import { changeProductList } from '../store/modules/productStore';
import categories from 'components/redux/categories';
import ProductList_Category from 'components/redux/ProductList_Category';
class CategoryContainer extends Component {
    handleSelect = category => {
        const { changeCategory } = this.props;
        changeCategory(category);
        const { changeProductList } = this.props;
        const query = null;
        const getProductList_Category = () => {

            switch (category) {
                case 'all':
                    changeProductList(ProductList_Category.productList_All);
                    break;
                case 'notebook':
                    changeProductList(ProductList_Category.productList_Notebook);
                    break;
                case 'mouse':
                    changeProductList(ProductList_Category.productList_Mouse);
                    break;
                case 'skin':
                    changeProductList(ProductList_Category.productList_Skin);
                    break;
                case 'lotions':
                    changeProductList(ProductList_Category.productList_Lotions);
                    console.log("test ->>>", ApiService.fetchProduct());
                    break;
            }
        }
        getProductList_Category();
    };

    render() {
        const { category } = this.props;
        // console.log(">>>>>." + category)
        return <Category onSelect={this.handleSelect} selected={category} />;

    }

}
//props로 넣어줄 스토어의 상태값
const mapStateToProps = ({ productStore }) => ({
    category: productStore.category,
    list: productStore.productList,

});

//props로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    changeCategory: category => dispatch(changeCategory(category)),
    changeProductList: list => dispatch(changeProductList(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryContainer);