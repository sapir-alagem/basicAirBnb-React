import React, { Component } from 'react';
import './Flat.scss';


class Flat extends Component {
    handleClick = () => {
        const { onSelect, id } = this.props;

        onSelect(id);
    }


    render() {
        const { img, price, name, currency } = this.props;

        return(
            <div className="flat" onClick={this.handleClick}>
                <img className="flat-picture" src={img} alt="pic" />
                <p className="flat-title">
                    <strong>{price}{currency}</strong> {name}
                </p>
            </div>
        );
    }
}
export default Flat;