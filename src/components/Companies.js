import React, { Component } from "react";
import google from '../images/google.png';
import adobe from '../images/adobe.png';
import paypal from '../images/paypal.png';
import artesal from '../images/artesal.png';
import bloom from '../images/bloom.png';

export default class Companies extends Component {
  render() {
    return (
      <div className="companiesSection">
        <ul>
          <li><img src={google} alt="google"/></li>
          <li><img src={adobe} alt="adobe"/></li>
          <li><img src={paypal} alt="paypal"/></li>
          <li><img src={artesal} alt="artesal"/></li>
          <li><img src={bloom} alt="bloom"/></li>
        </ul>
      </div>
    )
  }
}
