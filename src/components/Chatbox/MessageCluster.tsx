import React, { Component } from "react";
import Avatar from "./Avatar";
import Message from "./Message";
import "./MessageCluster.scss";

interface MessageClusterProps {
  user: any;
}

export default class MessageCluster extends Component<MessageClusterProps> {
  render() {
    const me = 0;
    const { user } = this.props;
    return (
      <div className="cluster">
        {user.id !== me ? (
          <div className="cluster__avatar">
            <Avatar image={user.image} link={user.link} />
          </div>
        ) : null}
        <div className="cluster__outer">
          <div className="">
            <Message
              content="that's right"
              user={user.id !== me ? "others" : "me"}
            />
            <Message
              content="should be that!!"
              user={user.id !== me ? "others" : "me"}
            />
          </div>
        </div>
      </div>
    );
  }
}
