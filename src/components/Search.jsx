import { useState } from "react"
import styled from "styled-components"
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom' 


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
  return (
    <Container>
    <FormStyle className="form" onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input className="input" onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}/>
        </div>
    </FormStyle>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 450px) {
        .form{
            width: 300px;
        }
    }
`
const FormStyle = styled.form`
    margin: 0rem 0rem;
    width: 1000px;
    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        border-radius: 1rem;
        outline: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        width: 100%;
    }
  
    svg {
        position: absolute;
        top: 20%;
        left: 0%;
        transform: translate(100%, 50%);
        color: white;
    }
`
export default Search