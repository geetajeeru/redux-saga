import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getUserDetails, deleteUser, setLoading} from '../actions/users';
import Modal from './Modal';
import Loader from './Loader';

const UserProfile = ({getUserDetails, deleteUser, setLoading, match, user, history, isLoading}) => {

    const[showModal, setShowModal] = useState(false);

    useEffect(()=> {
        const {id} = match.params;
        setLoading(true);
        setTimeout(()=>{
            getUserDetails(id);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleDelete = () => {
        deleteUser(user.id, history);
    }
    
    return(
        <div className="userContainer">
            <img src={user.avatar} alt=""/>
            <p>{user.email}</p>
            <p>{user.first_name + ' ' + user.last_name} </p>
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>Delete</button>

            <Modal 
                isOpen={showModal} 
                title={'Delete User'} 
                content={'Do you want to Delete the User?'} 
                onClose={handleClose}
                onCancel={handleClose}
                onOk={handleDelete}/>
            {isLoading ? <Loader isLoading={isLoading}/>: null}
        </div>
    );
    
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading
});

export default connect(mapStateToProps, {getUserDetails, deleteUser, setLoading})(UserProfile);