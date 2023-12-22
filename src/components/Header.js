import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 100px;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv>
        <ul>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
        </ul>
      </StyledHeaderDiv>
    </div>
  );
};

export default Header;
