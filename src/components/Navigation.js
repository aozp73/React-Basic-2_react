import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">글목록</Link>
        </li>
        <li>
          <Link to="/write">글쓰기</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navigation;
