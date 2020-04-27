import React, { Component } from 'react';
import './App.css';
import Product from './Product';


const products = [
  {
    category: "마우스",
    imageSrc: "https://shopping-phinf.pstatic.net/main_1949090/19490904073.1.20191009114959.jpg?type=f300",
  },
  {
    category: "노트북",
    imageSrc: "https://shopping-phinf.pstatic.net/main_1949090/19490904073.1.20191009114959.jpg?type=f300",
  },
  {
    category: "로션",
    imageSrc: "https://shopping-phinf.pstatic.net/main_1949090/19490904073.1.20191009114959.jpg?type=f300",

  },
  {
    category: "스킨",
    imageSrc: "https://shopping-phinf.pstatic.net/main_1949090/19490904073.1.20191009114959.jpg?type=f300",
  },
]

class App extends Component {

  render() {
    return (
      <div className="App">
        {products.map(product => {
          return <Product category={product.category} imageSrc={product.imageSrc} />
        })}
      </div>
    );
  }
};

export default App;
