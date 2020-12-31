import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [img, setImg] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('https://randomuser.me/api/');
      const newUser = data.results[0];
      setImg(newUser.picture.thumbnail);
      setFirstName(newUser.name.first);
      setLastName(newUser.name.last);
    };

    getUser();
  }, []);

  return (
    <div className="user-container">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        {firstName}
        <br />
        {lastName}
        <br />
      </div>
    </div>
  );
};

export default UseEffect;
