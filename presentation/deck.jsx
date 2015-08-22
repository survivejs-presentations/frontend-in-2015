import React from "react/addons";
import {Deck, Slide, Heading} from '../src/spectacle.jsx';
import preloader from "../src/utils/preloader";

const images = {
  city: require("./images/city.jpg"),
  cheese: require("./images/cheese.jpg"),
  boxing: require("./images/boxing.jpg"),
  babel: require("./images/babel.jpg"),
  lint: require("./images/lint.jpg"),
  style: require("./images/style.jpg")
};

preloader([images.city, images.cheese]);

const slides = [
  require("./slides/intro.jsx"),
  /*require("./slides/frameworks.jsx"),
  require("./slides/libraries.jsx"),
  require("./slides/npm.jsx"),
  require("./slides/build_tools.jsx"),
  require("./slides/productivity_tools.jsx"),
  require("./slides/css_processors.jsx"),
  require("./slides/javascript.jsx"),
  require("./slides/linting.jsx"),
  require("./slides/testing.jsx"),
  require("./slides/web_components.jsx"),
  require("./slides/conclusion.jsx")*/
].map((slides, i) => React.createElement(slides(images), {key: `slides-${i}`}));

export default class extends React.Component {
  render() {
    console.log(slides);

    return <Deck
      transition={["zoom", "slide"]}
      transitionDuration={800}>{slides}</Deck>;
  }
}
