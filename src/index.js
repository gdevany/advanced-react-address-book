import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store";
import {Provider} from 'react-redux';


// var selectedUser = '';
//
// function selectUser(user) {
//   selectedUser = user;
//   render();
// };

function render() {
  ReactDOM.render(
   <Provider store={store}><App /></Provider>,
   document.getElementById('root')
  );
}
render();

// export default selectUser;
