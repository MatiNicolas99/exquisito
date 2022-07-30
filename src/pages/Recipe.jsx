import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom' ;


function Recipe() {
  
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('intructions');

  const fetchDetails = async() => {
    
    const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=fee016ed14814a4a902a1c2d4425577b`)
    const detailData = await data.json();

    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper> 
     <div>
        <h2>{details.title} </h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active': ''} onClick={() => setActiveTab('instructions')}>Instrucciones</Button>
        <Button className={activeTab === 'ingredients' ? 'active': ''} onClick={() => setActiveTab('ingredients')}>¿Qué necesitamos?</Button>
      </Info> 
        {activeTab === 'instructions' && 
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 className="instructions" dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>}
        
        {activeTab === 'ingredients' &&
        <ul>
        {details.extendedIngredients.map((ingredient) => 
          <li key={ingredient.id }>{ingredient.original}</li>
        )}
      </ul>}  
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  .intructions {
    text-align: left;
  }
  margin-top: 1rem;
  margin-bottom: 0rem;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, minmax(20rem, 1fr));
  gap: 5%;
  .active{
    background: linear-gradient(35deg, #01473e, #016468); 
    color: white;
  }
 
  h2{
    margin-bottom: 1rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 1rem;
    list-style: none;
  }
  h3{
    font-size: 1.2rem;
    width: 50%
    text-align: center;
  }
  @media (max-width: 767px) {
    img {
      width: 300px;
      border-radius: 20px;
    }
  }
`
const Button = styled.button`
  padding: 1rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 40px;
  margin-right: 2rem;
  font-weight: 600;
  
`
const Info = styled.div`
  margin-left: 4rem;
  @media (max-width: 767px) {
    margin-left: 4rem;
    display:flex;  
  }
`
export default Recipe