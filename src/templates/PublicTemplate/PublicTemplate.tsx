import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
// import NavigationTop from "../../components/NavigationTop/NavigationTop";
import "./PublicTemplate.scss";

interface PublicProps {
  component: Component;
}

export default class PublicTemplate extends Component<PublicProps> {
  // constructor(props: PublicProps) {
  //   super(props);
  // }
  render() {
    const Component = this.props.children;
    return (
      <div className="content-public">
        <Navigation isPublic={true} />
        <div className="content-wrapper">
          {/* <NavigationTop /> */}
          {Component}
        </div>
      </div>
    );
  }
}
