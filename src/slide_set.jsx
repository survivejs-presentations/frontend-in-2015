/*global window*/

import React from "react/addons";
import tweenState from "react-tween-state";
import Base from "./base";
import Transitions from "./transitions";
import config from "../presentation/config";
import radium from "radium";

const SlideSet = React.createClass({
  displayName: "SlideSet",
  propTypes: {
    align: React.PropTypes.string,
    presenterStyle: React.PropTypes.object,
    children: React.PropTypes.node,
    notes: React.PropTypes.string,
    slideIndex: React.PropTypes.number,
    lastSlide: React.PropTypes.number
  },
  render() {
    return <div className="spectacle-slideset">{this.props.children}</div>;
  }
});

export default radium(SlideSet);
