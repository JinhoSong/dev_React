import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import { Link } from 'react-router-dom';
//import productStore from 'store/modules/productStore';
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";
import { changeCurrentKeyword, changeCurrentProduct, changeCurrentnv_mid, Change_ReviewNumber } from 'store/modules/productStore';
import productStore from 'store/modules/productStore';
//import { handleClick } from 'container/ProductListContainer';
//front-end\src\container\ProductListContainer.js
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin: {
    marginLeft: theme.spacing(2),
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //const { id, avatarSrc, title, subtitle, description, imgSrc, price, nv_mid } = props;
  const { cat_id, name, date, img_url, price, nv_mid } = props;
  const productURL = "https://search.shopping.naver.com/detail/detail.nhn?nvMid=" + props.nv_mid;
  //세트인듯
  const { changeCurrentProduct, changeCurrentKeyword, changeCurrentnv_mid } = props;
  const clickDetail = () => {
    changeCurrentProduct(name);
    changeCurrentKeyword("무게감");
    changeCurrentnv_mid(props.nv_mid);

    //여기서 리뷰를 바꾼다.
    //filter 후 length 한 값들이 data 

    //title로 이름이 바뀌면
    //그에 맞는 키워드로 바뀌고
    //그에 맞는 리뷰들로 바꿔어야 한다.

    //console.log(">>>>>>props.changeCurrentKeyword " + props.CurrentKeyword);
  }
  const loadReviewNumber = () => {
    Change_ReviewNumber();
  }

  return (
    <Card className={classes.root} style={{ backgroundColor: "#E0E0E0" }}>
      <CardHeader
        style={{ height: "50px" }}
        avatar={<Avatar src={img_url} />}
        title={name}

      />
      <CardMedia style={{ height: "300px", space: "nowrap" }} image={img_url} />
      <CardContent>
        <Typography variant="body2" component="p" >

          등록날짜 : {date}<br></br>
          {price}원
        </Typography>
      </CardContent>
      <CardActions>

        <Grid container spacing={6}>
          < Grid item xs={12} sm={5}>
            <Link to="/detail">
              <Button
                variant="contained"
                size="medium"
                color="primary"
                fullWidth="bool"
                className={classes.margin}
                onClick={clickDetail}
              >
                Detail
          </Button>
            </Link>
          </ Grid>
          < Grid item xs={12} sm={5}>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              fullWidth="bool"
              className={classes.margin}
              href={productURL}
            >
              BUY NOW
        </Button>
          </Grid>
        </Grid>


      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ productStore }) => ({  //2
  category: productStore.category,
  list: productStore.productList,
  CurrentProduct: productStore.CurrentProduct,
  CurrentKeyword: productStore.CurrentKeyword,
  Currentnv_mid: productStore.Currentnv_mid,
});

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentProduct: CurrentProduct => dispatch(changeCurrentProduct(CurrentProduct)),
    changeCurrentKeyword: CurrentKeyword => dispatch(changeCurrentKeyword(CurrentKeyword)),
    changeCurrentnv_mid: Currentnv_mid => dispatch(changeCurrentnv_mid(Currentnv_mid)),
    Change_ReviewNumber: ReviewNumber => dispatch(Change_ReviewNumber(ReviewNumber)),

  }
};

export default connect( // 스토어와 연결
  mapStateToProps,
  mapDispatchToProps,
)(ProductCard);

