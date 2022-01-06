import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const {memberId} = useParams()
    const navigate = useNavigate()
    const [member, setMember] = useState({})
    
    const style = {
        border : '1px solid tomato',
        margin : 10 , padding : 10 , borderRadius : 10
    }

    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`
        fetch(url)
        .then(res => res.json())
        .then(res => setMember( res))
    })

    const {name, email , phone , website} = member;
    
    const onGo = () => {
        navigate('/')
    }
    
    return (
        <div style = {style}>
            <h2> 멤버 세부 내용 : no {memberId}</h2>
            <h3> 이름 : {name} </h3>
            <p>이메일 : {email}</p>
            <p>전화번호 : {phone}</p>
            <p>웹사이트 : {website}</p>
            <button onClick={onGo}>이전</button>
        </div>
    );
};

export default MemberDetail;