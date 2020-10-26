import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';

const PrivateRoute = ({isAuthenticated, component: Component, ...otherProps}) => (
    <Route {...otherProps} component={
        (props) => (
            isAuthenticated ? (
                <div className="container">
                    <Header/>
                    <Component {...props}/>
                </div>
            ) : <Redirect to="/"/>
        )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);