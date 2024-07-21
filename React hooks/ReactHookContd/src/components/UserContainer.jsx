
import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux';
import { fetchUsers } from '../redux/User/UserActions'


const UserContainer = ({fetchUsers, userData}) => {

        useEffect(() => {
            fetchUsers()
        },[])

  return (
    <div className='text-center pt-[30px] '>
     {userData.loading ? (
         <h2>Loading</h2>
     ) : userData.error ? (
         <h2>{userData.error}</h2>
     ) : (
         <div>
             <h2>Users List</h2>
             <div>
                 {
                    userData && userData.users && userData.users.map(user => <p key={user.id}>{user.name}</p>)
                 }
             </div>
         </div>
     )}
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
