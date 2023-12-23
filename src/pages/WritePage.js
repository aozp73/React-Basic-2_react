import React from 'react';
import styled from 'styled-components';

const StyledPageNameH1 = styled.h1`
  margin: 20px;
`;

const StyledWrtieBoxForm = styled.form`
  margin: 20px;
`;

const WritePage = () => {
  const handleWrite = () => {
    let post = { id: 6, title: 'input 값' };
    // setPost();
  };

  return (
    <div>
      <StyledPageNameH1>글 쓰기</StyledPageNameH1>
      <hr />
      <StyledWrtieBoxForm>
        <input type="text" placeholder="제목을 입력하세요" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </StyledWrtieBoxForm>
    </div>
  );
};

export default WritePage;
