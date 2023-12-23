import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPageNameH1 = styled.h1`
  margin: 20px;
`;

const StyledWrtieBoxForm = styled.form`
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
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });
  const [posts, setPosts] = useState([
    { id: 1, title: '제목 1', content: '내용 1' },
    { id: 2, title: '제목 2', content: '내용 2' },
    { id: 3, title: '제목 3', content: '내용 3' },
    { id: 4, title: '제목 4', content: '내용 4' },
    { id: 5, title: '제목 5', content: '내용 5' },
  ]);
  const [idx, setIdx] = useState(posts.length + 1);

  const handleWrite = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: idx }]);
    setIdx(idx + 1);
  };

  // computed property names (key 동적할당)
  const handleForm = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <StyledPageNameH1>글 목록</StyledPageNameH1>
      <StyledWrtieBoxForm onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </StyledWrtieBoxForm>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            <p>번호: {post.id}</p>
            제목: {post.title} / 내용: {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
