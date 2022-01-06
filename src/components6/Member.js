import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
    const {id, name, email} = item
    const style = {
        border : '1px solid tomato',
        margin : 10 , padding : 10 , borderRadius : 10
    }
    const navigate = useNavigate()
    const onGo =() => {
        const url = `/member/${id}`
        navigate(url)
    }
    return (
        <div style={style}>
            <p>ID : {id} </p>
            <h4>이름 : {name}</h4>
            <p>email : {email}</p>
            <p> <Link to={`/member/${id}`}>자세히 보기</Link> </p>
            <button onClick={onGo}>상세페이지로 이동</button>
        </div>
    );
};

export default Member;