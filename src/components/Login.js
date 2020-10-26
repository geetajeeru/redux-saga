import React from 'react';
import UserForm from './UserForm';
import {connect} from 'react-redux';
import {login} from '../actions/users';

const Login = ({login, history}) => {

    const handleLogin = (user) => {
        login(user, history);
    }

    return(
        <UserForm action="login" onSubmit = {handleLogin}/>
    );
}

export default connect(null, {login})(Login);