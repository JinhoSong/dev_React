import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div>
                <ProductImage imageSrc={this.props.imageSrc} />
                <h1>{this.props.category}</h1>
            </div>
        )
    }
}
class ProductImage extends Component {
    render() {
        return (
            <img src={this.props.imageSrc} />
        )
    }
}
export default Product;