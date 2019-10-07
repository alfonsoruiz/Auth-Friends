import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';

import Friend from './Friend';

const FriendsList = props => {
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getFriends();
  }, friends);

  const getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleName = event => {
    setName(event.target.value);
  };

  const handleAge = event => {
    setAge(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const addFriend = event => {
    const friend = {
      name: name,
      age: age,
      email: email
    };

    axiosWithAuth()
      .post('/friends', friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="friends-list">
      <h1>Friends List</h1>
      <form className="login" onSubmit={addFriend}>
        <input
          type="text"
          onChange={handleName}
          value={name}
          placeholder="name"
        />
        <input type="text" onChange={handleAge} value={age} placeholder="age" />
        <input
          type="text"
          onChange={handleEmail}
          value={email}
          placeholder="email"
        />
        <button>Add Friend</button>
      </form>

      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
