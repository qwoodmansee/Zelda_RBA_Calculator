import React from 'react'
import PropTypes from 'prop-types';
import './InventoryItem.css'
export default class InventoryItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img src={require(`../../images/menu_items/${this.props.itemName}.png`)}/>
                <p className="item-count">{this.props.itemCount}</p>
            </div>
        )
    }
}

InventoryItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemCount: PropTypes.number,
    collected: PropTypes.bool
}

// Specifies the default values for props:
InventoryItem.defaultProps = {
    itemCount: 0,
    collected: false
  };