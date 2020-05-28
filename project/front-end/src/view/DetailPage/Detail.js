import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ProductList from "dbComponent/ProductList";
// sections for this page
import styles from "assets/jss/material-kit-react/views/components.js";

import PieChart from "view/DetailPage/Sections/PieChart";
import RadarChart from "view/DetailPage/Sections/RadarChart";
import Content from "components/Card/Content";
import Chart from "./Sections/Chart";
import ReviewList from "../../components/Review/ReivewList";
import SentimentalList from "../../components/Review/SentimentalList";
import ProductListContainer from "container/ProductListContainer";
import CategoryContainer from "container/CategoryContainer";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="Detail Page"
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
      <style>{'body { background-color: #f5f5f5; }'}</style>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <body>
          <div className={classes.sections}>
            <div className={classes.container}>
              <div className={classes.title}>
              </div>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <RadarChart />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <SentimentalList />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <PieChart />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <ReviewList />
                </Grid>
              </Grid>
              <CategoryContainer />
            </div>
          </div>
        </body>
        <Footer />
      </div>
    </div>
  );
}
