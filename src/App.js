import Category from "./components/Category";
import Pages from "./pages/Pages";
import {BrowserRouter, Link} from "react-router-dom" ; 
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav>
        <NavLogo>
            <E>E
            <GiKnifeFork />
            <Logo to={"/"}>quisito</Logo>
            </E>         
          </NavLogo>
          <Contact to={"/contacto/"}>Contacto</Contact>
        </Nav>
        <Search/>
        <Category/>  
        <Pages/>
    </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Nanum Gothic', sans-serif;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavLogo = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;
const Contact = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Nanum Gothic', sans-serif;
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: #000000;
:hover {
  font-size 1.6rem;
  color:#065c46;
}
`
const E = styled.div`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Nanum Gothic', sans-serif;
`;
export default App;
