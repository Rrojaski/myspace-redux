import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

// Components
import { Row, Col } from "./components/Grid/Grid";
import Header from "./layout/Header/Header";
import Content from "./layout/Content/Content";

import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
