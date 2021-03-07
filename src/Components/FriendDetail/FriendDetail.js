import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend,setFriend]=useState({})
    useEffect(()=>{
          fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
          .then(res=>res.json())
          .then(data=>setFriend(data))
    }, [])
    const {name, email, phone,website}=friend;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>ID: {friendId}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetail;