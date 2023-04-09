import styled from 'styled-components'

// import search from '../../assets/images/search.svg';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 0;

  
`;

export const Content = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  left: -0.8rem;
  /* .carregamento {
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 3;
  } */
  
`

export const Title = styled.h1`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 0;

  font-size: 17px;
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
`;

