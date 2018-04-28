import React from "react";
import "./Header.css";

const subtitleStyle = {
  textAlign: "center"
}
const Header = () => (
  <div id="header">
    <h1>New York Times Article Scrubber</h1>
    <p style={subtitleStyle}>Search for and save articles of interest!</p>
  </div>
);

export default Header;