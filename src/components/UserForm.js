import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Alert from './Alert';
import {types} from '../actions/types';

const UserForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = {
            'email': email,
            'password': password
        };
        props.onSubmit(user);
    }

    const closeAlert = () => {
        props.dispatch({
            type: types.SET_ERROR,
            error: ''
        })
    }

    return(
        <div className="container">
            <div className="form-container">
                {props.error ? <Alert error={props.error} onClose={closeAlert}/> : null}
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Username" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value={props.action === 'login' ? 'Login' : 'Signup'}/>
                    </div>
                    {props.action === 'login' ? 
                        <div>
                            <Link to="/signup" className="btn-link">Don't Have Account?</Link>
                        </div> : null}
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.userReducer.error
})

export default connect(mapStateToProps)(UserForm);