import React, { Component } from "react";
import Calendar from "../../components/Calendar/Calendar";
import Modal from "../../components/Modal/Modal";
import "./Meeting.scss";

interface MeetingProps {}
interface MeetingState {
  visible: boolean;
  messages: any[];
  user: any;
}

export default class Meeting extends Component<MeetingProps, MeetingState> {
  constructor(props: MeetingProps) {
    super(props);
    this.state = {
      visible: false,
      messages: [{ id: 1, userId: 0, message: "Hello" }],
      user: null
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e: any) => {
    this.setState({
      visible: true
    });
  };

  handleCancel = (e: any) => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="page-content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 has-border">
                    <button
                      className="btn btn--full btn--create-task"
                      onClick={this.showModal}
                    >
                      <i className="icon dripicons-plus"></i>
                      <span>Create</span>
                    </button>
                    <h1>{this.state.visible}</h1>
                    <Modal
                      title="Basic Modal"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <div className="row">
                        <div className="col-3">Icon</div>
                        <div className="col-9">
                          <div className="content">
                            <div className="heading">Reading Adventure Day</div>
                            <div className="description">
                              Let us know if you're coming!
                            </div>
                            <div className="type">
                              Meeting || Event || Casting
                            </div>
                            <hr />
                            <div className="heading">Reading Adventure Day</div>
                            <div className="description">
                              Let us know if you're coming!
                            </div>
                            <div className="type">
                              Meeting || Event || Casting
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                    <Calendar />
                    <div className="notetip">
                      <div className="notetip__heading">Calendar</div>
                      <ul className="notetip__list">
                        <li className="notetip__item meeting">
                          <span>Meeting</span>
                        </li>
                        <li className="notetip__item event">
                          <span>Event</span>
                        </li>
                        <li className="notetip__item casting">
                          <span>Casting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">A Detail Calendar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
