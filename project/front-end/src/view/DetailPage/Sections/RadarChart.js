import React from 'react';
import { Radar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Divider,
    Typography
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Grid } from "@material-ui/core";
import { connect } from 'react-redux';
import productStore from 'store/modules/productStore';
import { changeCurrentKeyword, changeCurrentProduct, changeSentimental } from 'store/modules/productStore';
import testData from './data';
const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    chartContainer: {
        position: 'relative',
        height: '300px'
    },
    stats: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    },
    device: {
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    deviceIcon: {
        color: theme.palette.icon
    }
}));

const RadarChart = props => {
    const { className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    let titleString = props.CurrentProduct + "'s Sentimental Analysis";

    //window.chartColors.red
    const data = {
        labels: props.SentimentalLabel,
        datasets: [
            {
                label: props.CurrentProduct,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                PointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',

                data: props.SentimentalNumber,
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                PointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96]
            }
        ]
    };
    const options = {
        scale: {
            ticks: {
                beginAtZero: true,

            },
        },
        legend: {
            display: true,
            position: 'top'
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutoutPercentage: 800,
        layout: { padding: 4 },

        tooltips: {

            mode: 'index',
            borderWidth: 1,

        },

    };


    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                action={
                    <IconButton size="small">
                        <RefreshIcon />
                    </IconButton>
                }
                title={titleString}
            />
            <Divider />
            <CardContent>
                <Radar
                    data={data}
                    options={options}
                    width={1000}
                    height={400}
                />
            </CardContent>
        </Card >
    );
};

RadarChart.propTypes = {
    className: PropTypes.string
};
const mapStateToProps = ({ productStore }) => ({  //2
    CurrentProduct: productStore.CurrentProduct,
    CurrentKeyword: productStore.CurrentKeyword,
    SentimentalLabel: productStore.SentimentalLabel,
    SentimentalNumber: productStore.SentimentalNumber,
    ReviewData: productStore.ReviewData,
});

const mapDispatchToProps = dispatch => {
    return {
        changeCurrentProduct: CurrentProduct => dispatch(changeCurrentProduct(CurrentProduct)),
        changeCurrentKeyword: CurrentKeyword => dispatch(changeCurrentKeyword(CurrentKeyword)),
        changeSentimental: SentimentalData => dispatch(changeSentimental(SentimentalData)),
    }
};

export default connect( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps,
)(RadarChart);

