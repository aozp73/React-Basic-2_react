import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px solid black;
  height: 100px;
  text-align: center;
`;

const Footer = () => {
  return (
    <div>
      <FooterList>
        <p>주소: 부산시 연제구 xxxx</p>
        <p>연락처: 010-xxxx-xxxx</p>
      </FooterList>
    </div>
  );
};

export default Footer;
