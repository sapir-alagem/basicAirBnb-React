import React from 'react';
import './Marker.scss';
// import classNames from 'class-names';

const Marker = ({ price, selected }) => {
    const classes = selected? 'marker selected' : 'marker';
    // const classes = classNames({ selected: selected, marker: true });

return <div className={classes}>{price}</div>;
}

export default Marker;