import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import NavigationTop from '../../components/NavigationTop/NavigationTop';
import './AuthTemplate.scss';

interface AuthProps {
  children: any;
}

export default class AuthTemplate extends Component<AuthProps> {
  render() {
    const Component = this.props.children;
    return (
      <div className="content-auth">
        <Navigation isPublic={false} />
        <div className="content-wrapper">
          <NavigationTop />
          <div className="content">{Component}</div>
        </div>
      </div>
    );
  }
}
