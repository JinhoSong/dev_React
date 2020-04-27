import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";
import PhoneInfoItem from "./PhoneInfoItem";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    category: "all",
  };
  render() {
    const { data } = this.props;
    const list = data.map((info) => <PhoneInfo key={info.id} info={info} />);
    return (<div>{list}
      {data.map((info) => (
        <PhoneInfoItem key={info.id} info={info} test={0} />
      ))}
    </div>);
  }
}

export default PhoneInfoList;
