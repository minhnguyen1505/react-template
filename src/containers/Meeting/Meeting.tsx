import React, { Component } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "./Meeting.scss";

export default class Meeting extends Component {
  render() {
    return (
      <div className="page-content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 has-border">
                    <div className="btn btn--full btn--create-task">
                      <i className="icon dripicons-plus"></i>
                      <span>Create</span>
                    </div>
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
