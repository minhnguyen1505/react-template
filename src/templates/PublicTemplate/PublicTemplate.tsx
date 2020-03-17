import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Icon } from "antd";
import "./PublicTemplate.scss";

interface PublicProps {
  children: any;
}

export default class PublicTemplate extends Component<PublicProps> {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const Component = this.props.children;
    const { collapsed } = this.state;
    return (
      <div className="content-public">
        <Navigation isPublic={true} collapsed={collapsed} />
        <Icon
          className="trigger"
          type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.toggle}
        />
        <div className="content-wrapper">{Component}</div>
      </div>
    );
  }
}
