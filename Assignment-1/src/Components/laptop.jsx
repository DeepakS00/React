/* eslint-disable no-useless-constructor */
import "./laptop.scss";
import React, { Component } from "react";
import Mac from "./mac.png";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {
        "13-inch": 122900,
        "14-inch": 194900,
        "16-inch": 239900,
        "8GB": 0,
        "16GB": 20000,
        "256GB": 0,
        "512GB": 20000,
        "1TB": 40000,
      },
    };
  }
  render() {
    return (
      <div>
        <h4 className="greeting">Thank you for showing interest...</h4>
        <p>
          You've selected the Macbook pro with{" "}
          <span className="data">{this.props.screen}</span> screen,{" "}
          <span className="data">{this.props.ram}</span> ram and{" "}
          <span className="data">{this.props.storage}</span> SSD storage.
        </p>
        <div className="price">
        <h2>Price</h2>
        <h4>
          Rs. {parseInt(this.state.price[`${this.props.screen}`]) +
            parseInt(this.state.price[`${this.props.ram}`]) +
            parseInt(this.state.price[`${this.props.storage}`])}
        </h4>
        </div>
      </div>
    );
  }
}

export default class Laptop extends Component {
  state = {
    ramFlag: false,
    storageFlag: false,
    submitFlag: false,
  };

  screenChangeHandler = (event) => {
    this.setState({
      screen: event.target.value,
      ramFlag: true,
      price: event.target.price,
    });
  };

  ramChangeHandler = (event) => {
    this.setState({
      ram: event.target.value,
      storageFlag: true,
    });
  };

  storageChangeHandler = (event) => {
    this.setState({
      storage: event.target.value,
      submitFlag: true,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ detailsFlag: true });
  };

  render() {
    return (
      <div className="main-content">
        <div className="drop-downs">
          <form onSubmit={this.submitHandler}>
            <div className="options">
              <div className="values">
                <label htmlFor="screen">Screen</label>
                <select
                  value="DEFAULT"
                  onChange={this.screenChangeHandler}
                  name="screen"
                  id="screen"
                >
                  <option value="DEFAULT" disabled
                  hidden
                  >
                    Select your screen-size
                  </option>
                  <option value="13-inch">13-inch</option>
                  <option value="14-inch">14-inch</option>
                  <option value="16-inch">16-inch</option>
                </select>
              </div>

              {this.state.ramFlag && (
                <div className="values">
                  <label htmlFor="ram">Ram</label>
                  <select
                    onChange={this.ramChangeHandler}
                    name="ram"
                    id="ram"
                  >
                    <option value="none" selected disabled hidden>
                      Select Ram
                    </option>
                    <option value="8GB">8GB</option>
                    <option value="16GB">16GB</option>
                  </select>
                </div>
              )}

              {this.state.storageFlag && (
                <div className="values">
                  <label htmlFor="storage">Storage</label>
                  <select
                    onChange={this.storageChangeHandler}
                    name="storage"
                    id="storage"
                  >
                    <option value="none" selected disabled hidden>
                      Select storage
                    </option>
                    <option value="256GB">256GB</option>
                    <option value="512GB">512GB</option>
                    <option value="1TB">1TB</option>
                  </select>
                </div>
              )}

              {this.state.submitFlag && (
                <div className="submit-action">
                  <button type="submit">Submit</button>
                </div>
              )}
            </div>
          </form>
        </div>

        {this.state.detailsFlag && (
          <div className="specs">
            <img src={Mac} alt="" />
            <div className="details">
              <Details
                ram={this.state.ram}
                screen={this.state.screen}
                storage={this.state.storage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
