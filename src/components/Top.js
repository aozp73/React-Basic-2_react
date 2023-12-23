import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Top = () => {
  // const num = useSelector((store) => store.num);
  // const name = useSelector((store) => store.username);
  const { num, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>Top</h1>
      번호: {num} / 이름: {username}
    </div>
  );
};

export default Top;
