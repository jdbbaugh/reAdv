import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '50px')};
  .rock_on {
    font-size: 100px;
  }
  `;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
