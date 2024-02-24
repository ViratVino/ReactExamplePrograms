import React from 'react';
import Hoc from '../../assets/hoc/Hoc';

const Navbar = (probs) => {
  return (
    <div>
        <h3>
            {probs.profile.name}
        </h3>
    </div>
  )
}

export default Hoc(Navbar);