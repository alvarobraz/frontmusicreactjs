import styled from 'styled-components'

// import search from '../../assets/images/search.svg';

export const ContainerHome = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 0;

  
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: top;
  left: 0rem;
  
  .carregamento {
    position: relative;
    width: 100%;
    margin: 0px auto;
    padding: 5rem 0 0 32rem;
    text-align: center;
    img{
      width: 3rem;
    }
  }

  /* div {
    /* width: 100%; */
    /* background-color: #ccc; */
    padding: 0rem 4rem 1rem 1rem;

    
    
    
  } 

  .elemento-60 {
    width: 60%;
    min-height: 25rem;
    vertical-align: top;
    p {
      padding: 0 3.7rem 2rem 0;
      text-align: left;
      line-height: 1.7rem;
    }
  }

  .elemento-40 {
    top: -4.5rem;
    width: 40%;
    min-height: 25rem
    vertical-align: top;
    iframe {
      width: 28rem;
      height: 17rem;
    }
  }
  
`

export const HeaderCategory = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: left;
  .carregando {
    position: relative;
    width: 5%;
    margin: 0px auto;
    padding: 2rem 0 0 2rem;
    text-align: center;
    img{
      width: 2rem;
    }

  }
  

  img {
    position:relative;
    margin: 5px 0 0 0.5rem;
    width: 20px;
    height: 20px;
    text-align: right;
    right: 0px;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 27px;
  color: var(--darkPurple);
  font-family: 'Roboto', sans-serif;
  margin: 0.4rem 1rem 0 0;
  
  span {
    display: block;
    font-size: 20px;
  }
`;

// export const Author = styled.h2`
//   font-size: 20px;
//   color: var(--darkPurple);
//   font-family: 'Roboto', sans-serif;
//   margin: 0.4rem 1rem 0 0;
// `;

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



/**/

export const FormModal = styled.div`

  h1 {
    font-size: 17px;
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    padding: 0 0 1rem 0;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    &::placeholder {
      color: var(--darkPurple);
    }

  }

  .error_input {
    border: 2px solid #bc4749 !important;
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    background-color: var(--lightPurple);
    color: #fff;
    margin-top: 1rem;
    font-size: 1rem;
    border:none;

    img {
      position: relative;
      width: 1.25rem;
      padding: 0.4rem 0 0 0;
      /* margin: 0 40% */
    }
    
  }

`

export const Boxcategory = styled.div`
border-top: 1px solid #1b263b;
margin-top: 1rem;

img {
  position: relative;
  width: 2rem;
  padding: 2rem 0 0 0;
  margin: 0 47%
}

div {
  width: 100%;
  height: 2rem;
  /* background-color: #000; */
  border-bottom: 1px solid #1b263b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    font-size: 13px;
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
  }
  button {
    width: 4rem;
    height: 1.8rem;
    font-size: 11px;
    border: 0;
    color: #fbfbfb;
    
  }
  .green {
    background-color: #127475;
  }
  .red {
    background-color: #f2542d;
  }
  .yellow {
    background-color: #fa9500;
  }
  
}

`

