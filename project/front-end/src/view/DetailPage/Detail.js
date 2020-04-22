import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ProductList from "dbComponent/ProductList";
// sections for this page
import styles from "assets/jss/material-kit-react/views/components.js";

import Example from "view/DetailPage/Sections/Example";
import ChartContent from "view/DetailPage/Sections/ChartContent";
import PieChart from "view/DetailPage/Sections/PieChart";
import Content from "components/Card/Content";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="Main Page Design"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/night_view.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Write our Team Name</h1>
                <h3 className={classes.subtitle}>
                  The only true happiness comes from squandering ourselves for a
                  purpose
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.sections}>
          <div className={classes.container}>
            <div className={classes.title}>
              <p color="white">Title</p>
            </div>
            <ProductList />
            <PieChart />
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
