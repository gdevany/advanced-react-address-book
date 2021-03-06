import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers.js";
import UserDetail from "./components/UserDetail.js";
import SearchBox from "./components/SearchBox.js";


function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>

        <div>
          <SearchBox />
          <ListOfUsers />
          <UserDetail />
        </div>

    </div>
  );
}

export default App;
