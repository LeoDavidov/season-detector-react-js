import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui huge text loader">{props.children}</div>
        </div>
    );
};

Loader.defaultProps = {
    children: 'Waiting...',
};

export default Loader;
