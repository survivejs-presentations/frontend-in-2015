import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class TableRow extends Base {
  render() {
    return (
      <tr style={[this.context.styles.components.tableRow, this.getStyles(), this.props.style]}>
        {this.props.children}
      </tr>
    );
  }
}

TableRow.propTypes = {
  children: React.PropTypes.node
};

TableRow.contextTypes = {
  styles: React.PropTypes.object
};

export default TableRow;
