import React, { Component } from "react";
import "./FormInput.scss";

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message">
        <span className="error-message__triangle" />
        <span className="error-message__content">{this.props.children}</span>
      </div>
    );
  }
}
