import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import 'bootstrap/dist/css/bootstrap.css';

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById("root"));