import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from 'components/redux/Category';

import { changeCategory } from '../store/modules/productStore';

class CategoryContainer extends Component {
    handleSelect = category => {
        const { changeCategory } = this.props;
        changeCategory(category);
    };

    render() {
        const { category } = this.props;
        console.log(">>>>>." + category)
        return <Category onSelect={this.handleSelect} selected={category} />;

    }

}
//props로 넣어줄 스토어의 상태값
const mapStateToProps = ({ productStore }) => ({
    category: productStore.category,

});

//props로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    changeCategory: category => dispatch(changeCategory(category)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryContainer);