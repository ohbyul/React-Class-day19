import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Front from './Front';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h2>Profile Page </h2>
            <ul>
                <li><Link to="user1">전지현</Link></li>
                <li><Link to="user2">송혜교</Link></li>
                <li><Link to="user3">유재석</Link></li>
                <li><Link to="user4">강호동</Link></li>
                <li><Link to="/profile/user5">이도현</Link></li>    
                {/* Link to 절대경로 */}
            </ul>

            <Routes>
                <Route path = ":id" element={ <User /> }/>
            </Routes>
        </div>
    );
};

export default Profile;