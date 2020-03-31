import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
const MyComponent = props => {
  const { name, children, favoriteNumber } = this.props;
  return (
    <div>
      나의 이름은 {name} 입니다<br></br> children 값은 {children} 입니다.
      <br>제가 좋아하는 숫자는 {favoriteNumber} 입니다. </br>
      입니다
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름'
};
MyComponent.prototype = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
