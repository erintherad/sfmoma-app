import React from 'react';
import '../styles/index.css';

export default class Header extends React.Component {
  constructor() {
    super();
    this.defaultProps = {
      header: "",
      headerClass: ""
    };
  }

  render() {
    return (
      <div className="col-md-12 text-center header-div">
        <h1 className={ this.props.headerClass }>{ this.props.header }</h1>
      </div>
    )
  }
}
