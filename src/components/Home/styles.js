import styled from 'styled-components'

// import search from '../../assets/images/search.svg';

export const ContainerHome = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 0;

  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  align-items: center;

  
  left: 0rem;
  .carregamento {
    position: relative;
    width: 100%;
    margin: 0px auto;
    padding: 5rem 0 0 21rem;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
    img{
      width: 5rem;
    }
  }
  
`

export const HeaderCategory = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: left;
`

export const Title = styled.h1`
  font-size: 17px;
  color: var(--darkPurple);
  font-family: 'Roboto', sans-serif;
  margin: 0.4rem 1rem 0 0;
`;

export const ButtonCategory = styled.button`
  width: auto;
  margin: 0.1rem 0.5rem;
  padding: 0.3rem 0.7rem ;
  background-color: var(--lightPurple);
  border: 0;
  border-radius: 5px;
  font-size: 10px;
  color: #fbfbfb;
  font-family: 'Poppins', sans-serif;
  transition: 1s;
  &:hover {
    background-color: var(--darkPurple);
    transition: 1s;
  }
`;

