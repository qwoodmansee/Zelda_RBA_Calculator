import React from 'react'
import PropTypes from 'prop-types';

export default class InventoryItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img src={require(`../../images/menu_items/${this.props.itemName}.png`)}/>
                <p>{this.props.itemValue}</p>
            </div>
        )
    }
}

InventoryItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemValue: PropTypes.number.isRequired,
    collected: PropTypes.bool
}

// Specifies the default values for props:
InventoryItem.defaultProps = {
    collected: false
  };