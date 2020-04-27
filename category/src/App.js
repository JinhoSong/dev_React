import React, { useState, useCallback } from 'react';
import ProductPage from "./page/ProductPage";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <ProductList category={category} />
    </div>
  );
};

export default App;
