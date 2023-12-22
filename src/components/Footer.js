import styled from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 100px;
  text-align: center;
`;

const Footer = () => {
  return (
    <div>
      <StyledFooterDiv>
        <p>주소: 부산시 연제구 xxxx</p>
        <p>연락처: 010-xxxx-xxxx</p>
      </StyledFooterDiv>
    </div>
  );
};

export default Footer;
