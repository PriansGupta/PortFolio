import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Home from "./Pages/HomePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/Home" exact element={<Home></Home>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
