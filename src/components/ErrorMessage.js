import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            <h1>{props.children}</h1>
        </div>
    );
};

ErrorMessage.defaultProps = {
    children: 'Error. Try again.',
};

export default ErrorMessage;
