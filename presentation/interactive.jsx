import React from "react";
import Heading from "../src/heading";

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      border: "none",
      color: "white",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        <Heading size={5} textColor="black">I've seen {this.state.count} cats</Heading>
        <button style={styles} type="button" onClick={this.sawCat}>Saw a Cat</button>
      </div>
    );
  }
  sawCat() {
    this.setState({ count: this.state.count + 1 });
  }
}
