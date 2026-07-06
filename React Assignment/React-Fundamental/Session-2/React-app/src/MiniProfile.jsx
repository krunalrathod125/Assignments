import React from 'react'
import ProfileImg from '../src/assets/MyProfile.png'

function MiniProfile({ name, status }) {
  return (
    <div>
      <img src={ProfileImg} alt={name} width="100" />
      <h2>{name}</h2>
      <p>{status}</p>
    </div>
  );
}
export default MiniProfile