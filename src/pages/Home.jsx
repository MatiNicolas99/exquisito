import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import HomeElements from "../components/HomeElements";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <HomeElements/>
      <Popular/>
      <Veggie/> 
    </Container>
  )
}

const Container = styled.div`
`

export default Home