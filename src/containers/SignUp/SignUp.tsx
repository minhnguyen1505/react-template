import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <form className="signup">
        <div className="card signup__card">
          <h5 className="header">Create A Free Account</h5>
          <div className="body">
            <ul className="signup__tabs nav">
              <li className="tab">
                <span className="tab-link active">Buy | Sell</span>
              </li>
              <li className="tab">
                <span className="tab-link">Individual | Business</span>
              </li>
              <li className="tab">
                <span className="tab-link">Create A Free Account</span>
              </li>
            </ul>
            <div className="signup__fieldsets">
              <fieldset className="current">
                <h2 className="heading">
                  Are looking to buy or sell services on ReactNewbie?
                </h2>
                <input type="radio" name="gender" value="male" /> Buy
                <input type="radio" name="gender" value="female" /> Sell
                <input type="radio" name="gender" value="other" /> Both
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
              <div className="btn-action">
                <button className="btn btn--primary" id="next">
                  Next Section ▷
                </button>
                <button type="submit" className="btn btn--primary" id="final">
                  Create A Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
