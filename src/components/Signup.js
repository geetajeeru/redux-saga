import React from 'react';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import {signup} from '../actions/users';

const Signup = ({signup, history}) => {

    const handleSignup = (user) => {
        signup(user, history);
    }

    return(
        <UserForm action="signup" onSubmit={handleSignup}/>
    );
}

export default connect(null, {signup})(Signup);