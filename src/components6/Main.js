import React, { useEffect, useState } from 'react';
import Member from './Member';
import MemberDetail from './MemberDetail';

const Main = () => {
    const [data, setData ] = useState([])
    useEffect( ()=> {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
    })
    return (
        <div>
            <h2>Main</h2>
            <h3>회원수 : {data.length}</h3>
            {
                data.map(item => <Member key={item.id} item={item} />)
            }
        </div>
    );
};

export default Main;