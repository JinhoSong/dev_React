import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProduct from "dbComponent/AddProduct";
import EditProduct from "dbComponent/EditProduct";
import ProductList from "dbComponent/ProductList";
import Detail from "view/DetailPage/Detail";
import List from "view/ListPage/List";
import { ExpansionPanelDetails } from "@material-ui/core";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={style}>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products" component={ProductList} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/edit-product" component={EditProduct} />
            <Route path="/detail/:category?" component={Detail} />
            <Route path="/List" component={List} />
            <Route path="/List/:category" component={List} />
            <Route path="/:category?" component={List} />

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const style = {

  margin: "10px",
};

export default AppRouter;
