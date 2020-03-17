import React, { Component } from "react";
import "./Avatar.scss";

interface AvatarProps {
  image: string;
  link: string;
  status?: string;
}

export default class Avatar extends Component<AvatarProps> {
  render() {
    const { image, link, status } = this.props;
    return (
      <div className="avatar">
        <a className="avatar__link" href={link}>
          <div className="avatar__image">
            <img src={image} width="28" height="28" alt="" className="img" />
          </div>
        </a>
        {status ? <div className={"avatar__status " + status}></div> : null}
      </div>
    );
  }
}
