import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class TableItem extends Base {
  render() {
    return (
      <td style={[this.context.styles.components.tableItem, this.getStyles(), this.props.style]}>
        {this.props.children}
      </td>
    );
  }
}

TableItem.propTypes = {
  children: React.PropTypes.node
};

TableItem.contextTypes = {
  styles: React.PropTypes.object
};

export default TableItem;
