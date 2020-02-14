import React, { Component } from "react";
import Chatbox from "../../components/Chatbox/Chatbox";
import "./HomePage.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page-content container-fluid">
        Homepage
        <Chatbox />
      </div>
    );
  }
}
