import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    scrollToBottom() {
        window.scrollTo({
            top: 600,
            behavior: "smooth"
        });
    }
    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div>
                        <div onClick={() => this.scrollToTop()}>
                            <IconButton size="large">
                                <ArrowUpwardIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                        <div onClick={() => this.scrollToBottom()}>
                            <IconButton size="large">
                                <ArrowDownwardIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}
