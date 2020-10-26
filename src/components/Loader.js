import React from 'react';
import loader from '../assets/loader.gif';

const Loader = (props) => {
    return(
        <div>
            <div className="loader">
                <img src={loader} alt=""/>
            </div>
            <div className="loader-backdrop" style={{display: `${props.isLoading ? 'block' : 'none'}`}}></div>
        </div>
    )
}

export default Loader;