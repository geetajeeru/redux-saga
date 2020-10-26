import React from 'react';

const Alert = (props) => {
    return(
        <div className="alert">
            <div>
                {props.error}
            </div>
            <button className="close" onClick={()=>props.onClose()}>&times;</button>
        </div>
    )
}

export default Alert;