import React from "react";
import "./Headline.css";
import Moment from "react-moment";

const Headline = props => (
  <li className="headline">
    {props.children}
    <h3>{props.headline}</h3>
    <h4>{props.snippet}</h4>
    <p>Published on <Moment format="M-D-YYYY">{props.date}</Moment></p>
    <a href={props.url} target="_blank">Web Link</a> 
  </li>
);

export default Headline;