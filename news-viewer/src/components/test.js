import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";
class test extends Component {

    render() {
        return (
            <div>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={["and", "or", "the"]}
                    autoEscape={true}
                    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"></Highlighter>
            </div>
        )
    }
}
export default test;