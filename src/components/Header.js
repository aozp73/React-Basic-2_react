import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

// const StyledHeaderDiv = styled.div`
//   border: 1px solid black;
//   height: 100px;
//   background-color: ${(props) => props.backgroudColor};
// `;

// const StyledHeaderLink = styled(Link)`
//   color: red;
// `;

const Header = () => {
  return (
    <div>
      {/* <StyledHeaderDiv backgroudColor="lightgray">
        <ul>
          <li>
            <StyledHeaderLink to="/">홈</StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink to="/login/10">로그인</StyledHeaderLink>
          </li>
        </ul>
      </StyledHeaderDiv> */}

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login/10" className="nav-link">
              login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
