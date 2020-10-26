import React, {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/users';
import Modal from './Modal';

const Header = (props) => {

    const[showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleLogout = () => {
        props.logout();
    }

    return(
        <div className="header-container">
            <div>Welcome {props.username}</div>
            <button className="btn-link logout" onClick={() => setShowModal(true)}>Logout</button>

            <Modal
                isOpen={showModal} 
                title={'Logout'} 
                content={'Do you want to Logout?'} 
                onClose={handleClose}
                onCancel={handleClose}
                onOk={handleLogout}
            />

        </div>
    );
}

const mapStateToProps = (state) => ({
    username: state.userReducer.username
});

export default connect(mapStateToProps, {logout})(Header)