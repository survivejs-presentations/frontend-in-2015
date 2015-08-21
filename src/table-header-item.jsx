import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class TableHeaderItem extends Base {
  render() {
    return (
      <td style={[this.context.styles.components.tableHeaderItem, this.getStyles(), this.props.style]}>
        {this.props.children}
      </td>
    );
  }
}

TableHeaderItem.propTypes = {
  children: React.PropTypes.node
};

TableHeaderItem.contextTypes = {
  styles: React.PropTypes.object
};

export default TableHeaderItem;
