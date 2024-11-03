import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logOut } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logOutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn