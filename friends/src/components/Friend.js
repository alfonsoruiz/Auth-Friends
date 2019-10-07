import React from 'react';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};

export default Friend;
