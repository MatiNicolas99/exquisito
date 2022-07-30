import { FaPizzaSlice, FaHamburger } from "react-icons/fa" 
import { GiNoodles, GiPalmTree } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"


const Category = () => {
  return (
    <List>
        <SLink to={"/cuisine/italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Chinese"}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </SLink>
        <SLink to={"/cuisine/Caribbean"}>
            <GiPalmTree/>
            <h4>Caribbean</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6.5rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    
    @media (max-width: 450px) {
        border-radius: 20px;
    }

    h4 {
        color: white;
        font-size: 0.8rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`
export default Category