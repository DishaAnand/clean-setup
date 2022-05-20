import React from "react";
import { render } from "react-dom";
import styles from "./styles.scss";

import "./styles.scss";

const App = () => (
  <div>
    <h1 className={styles.headline}>Hello</h1>
    <p className={styles.para}>oajosdoaodja adaodoa</p>
  </div>
);

render(<App />, document.getElementById("app"));
