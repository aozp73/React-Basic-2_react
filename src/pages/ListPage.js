import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPageNameH1 = styled.h1`
  margin: 20px;
`;

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: '내용 1' },
    { id: 2, content: '내용 2' },
    { id: 3, content: '내용 3' },
    { id: 4, content: '내용 4' },
    { id: 5, content: '내용 5' },
  ]);

  return (
    <div>
      <StyledPageNameH1>글 목록</StyledPageNameH1>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            <p>번호: {post.id}</p>
            {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
