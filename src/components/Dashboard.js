import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getUsersRequest, setLoading} from '../actions/users';
import {connect} from 'react-redux';
import Loader from './Loader';

const Dashboard = ({users, isLoading, getUsersRequest, setLoading}) => {

    useEffect(()=>{
        setLoading(true);
        setInterval(() => {
            getUsersRequest(1);
        }, 3000);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePagination = (num) => {
        getUsersRequest(num);
    }

    console.log('is loading ', isLoading);
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length ? users.map(user => <tr key={user.id}>
                        <td><Link to={`/user/${user.id}`}>{user.email}</Link></td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                    </tr>) : null}
                </tbody>
            </table>
            <div className="pagination">
                <p><i className="fas fa-arrow-alt-circle-left fa-2x" onClick={() => handlePagination(1)}></i></p>
                <p><i className="fas fa-arrow-alt-circle-right fa-2x" onClick={() => handlePagination(2)}></i></p>
            </div>
            {isLoading ? <Loader isLoading={isLoading}/>: null}
        </>
    );
}

const mapStateToProps = (state) => ({
    users: state.userReducer.users,
    isLoading: state.userReducer.isLoading
});

export default connect(mapStateToProps, {getUsersRequest, setLoading})(Dashboard);