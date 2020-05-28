import React, { useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import productStore from 'store/modules/productStore';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,

  Divider,

} from '@material-ui/core';

import ReviewTable from './ReviewTable';
import mockData from './data';
//import { StatusBullet } from 'StatusBullet';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1000
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const ReviewList = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [reviews] = useState(mockData);
  const selectKeyword = props.CurrentKeyword;
  let viewKeyword;
  if (selectKeyword) {
    viewKeyword = selectKeyword;
  } else {
    viewKeyword = "전체보기";
  }
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        color=""
        title={viewKeyword}
      />
      <Divider />
      <CardContent className={classes.content}>
      </CardContent>
      <ReviewTable />
      <Divider />
    </Card>
  );
};

ReviewList.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = ({ productStore }) => ({  //2

  CurrentKeyword: productStore.CurrentKeyword,
});

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect( // 스토어와 연결
  mapStateToProps,
  mapDispatchToProps,
)(ReviewList);