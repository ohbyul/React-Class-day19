import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from "./data"

const User = () => {
    const { id } = useParams()
    const profile = data[id]
    const navigate = useNavigate()
    const onGo1 = () => {
        navigate('/')
    }
    
    const onGo2 = () => {
        navigate('/about')
        // navigate(-1)     뒤로가기 한단계
        // navigate(-2)     뒤로가기 두단계
        // navigate(1)      앞으로 한단계
        
    }
    return (
        <div>
            <h2>User Page</h2>
            <h3> {profile.name} / {profile.job } </h3>
            <p>
                <button onClick={onGo1}>home</button>
                <button onClick={onGo2}>about</button>
            </p>
        </div>
    );
};

export default User;