import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Table extends Base {
  render() {
    return (
      <table style={[this.context.styles.components.table, this.getStyles(), this.props.style]}>
        {this.props.children}
      </table>
    );
  }
}

Table.propTypes = {
  children: React.PropTypes.node
};

Table.contextTypes = {
  styles: React.PropTypes.object
};

export default Table;
