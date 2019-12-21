import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
// import NavigationTop from "../../components/NavigationTop/NavigationTop";
import "./PublicTemplate.scss";

interface PublicProps {
  children: any;
}

export default class PublicTemplate extends Component<PublicProps> {
  render() {
    const Component = this.props.children;
    return (
      <div className="content-public">
        <Navigation isPublic={true} />
        <div className="content-wrapper">{Component}</div>
      </div>
    );
  }
}
