import React, { Component } from "react";
import "./Message.scss";

interface MessageProps {
  content: String;
}

export default class Message extends Component<MessageProps> {
  render() {
    const { content } = this.props;
    return (
      <div className="message">
        <div className="message__outer">
          <div className="message__inner direction_ltr clearfix">
            <div className="message__float">
              <div className="message__wrapper">
                <div className="dont_know"></div>
                <div className="message__content">
                  <div className="_4gx_">
                    <div className="message__rounded">
                      <div>
                        <span className="message__single">
                          <span>{content}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="action">
                <span className="action__outer">
                  <span className="action__inner">
                    <button id="react_to_message_button">
                      <i className="dripicons-heart"></i>
                    </button>
                  </span>
                  <span className="action__inner">
                    <button>
                      <i className="dripicons-toggles"></i>
                    </button>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="message__buffer"></div>
      </div>
    );
  }
}
