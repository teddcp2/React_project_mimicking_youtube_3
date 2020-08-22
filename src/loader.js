import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div class="ui segment style">
      <div class="ui active inverted dimmer ">
        <div class="ui text loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
