import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {
    const {user}= useAuth()
    return (
        <div>  <h2 className="text-2xl font-bold">Hi, Welcome </h2>
        {
            user && user?.displayName ? user.displayName: "Back"
        }
            
        </div>
    );
};

export default UserHome;