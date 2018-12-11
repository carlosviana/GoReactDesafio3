import React, { Component } from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import store from "./store";

import Routes from "./routes";

import "./styles/style.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
