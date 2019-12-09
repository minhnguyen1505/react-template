import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <form id="signup" action="somewhere" method="POST">
        <ul id="section-tabs">
          <li className="current active">
            <span>1.</span> Creds
          </li>
          <li>
            <span>2.</span> Deets
          </li>
          <li>
            <span>3.</span> Settings
          </li>
          <li>
            <span>4.</span> Last Words
          </li>
        </ul>
        <div id="fieldsets">
          <fieldset className="current">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" className="required email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="required" />
          </fieldset>
          <fieldset className="next">
            <label htmlFor="username">Username:</label>
            <input name="username" type="text" />
            <label htmlFor="bio">Short Bio:</label>
            <textarea name="bio" className="required"></textarea>
          </fieldset>
          <fieldset className="next">
            <label htmlFor="interests">Basic Interests:</label>
            <textarea name="bio"></textarea>
            <p>
              Receive newsletter?
              <br />
              <input type="radio" name="newsletter" value="yes" />
              <label htmlFor="newsletter">yes</label>
              <input type="radio" name="newsletter" value="no" />
              <label htmlFor="newsletter">no</label>
            </p>
          </fieldset>
          <fieldset className="next">
            <label htmlFor="referrer">Referred by:</label>
            <input type="text" name="referrer" />
            <label htmlFor="phone">Daytime Phone:</label>
            <input type="tel" name="phone" />
          </fieldset>
          <a className="btn" id="next">
            Next Section ▷
          </a>
          <input type="submit" className="btn" />
        </div>
      </form>
    );
  }
}

export default SignUp;
