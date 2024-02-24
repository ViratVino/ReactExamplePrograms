import React from 'react';
import Hoc from '../../assets/hoc/Hoc';

const Profile = ({profile}) => {
    console.log(profile);
  return (
    <div>
        <h1>{profile.company}</h1>
        
    </div>
  )
}

export default Hoc(Profile);