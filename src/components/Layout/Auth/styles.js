import styled from 'styled-components'

// import search from '../../assets/images/search.svg';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 7rem 0 0 0;
  background: var(--background);

  display: flex-start;
  align-items: center;
  justify-content: space-between;

`;

export const Content = styled.main`
  position: relative;
  max-width: 500px;
  height: auto;
  margin: 0rem auto;
  padding: 0rem 1rem 0rem 1rem;
  background: var(--background);

  display: wrap;
  flex-direction: column;

    label {
      display: block;
      font-size: 17px;
      color: var(--darkPurple);
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      padding: 0 0 0.2rem 0;

      input {
      display: inline;
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      margin-bottom: 0.3rem;

      &::placeholder {
        color: var(--darkPurple);
      }
    }
  }

  input[type=text], input[type=password], input[type=confirm_password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    margin-bottom: 0.3rem;

    &::placeholder {
      color: var(--darkPurple);
    }
    
  }

  .error_input {
    border: 2px solid #bc4749 !important;
  }

  .carregando {
    position: relative;
    width: 3rem;
    margin:  0 10rem;
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
    transition: 1s;
    &:hover {
      opacity: 0.8;
      transition: 1s;
    }
  }

  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #bc4749;
    transition: 1s;
    &:hover {
      background-color: #bc4749;
      opacity: 0.8;
      transition: 1s;
    }
  }

  
  span.forgot {
    float: right;
    padding-top: 16px;
  }

  .recover {
    padding: 10px 10px;
    background-color: #95d5b2;
    color: var(--backgroundHeader);
    transition: 1s;
    &:hover {
      color: var(--backgroundHeader);
      opacity: 0.7;
      transition: 1s;
    }
  }

`;



// export const Content = styled.div`
//   max-width: 1120px;
//   margin: 0 auto;

//   padding: 0 1rem 2rem;

//   display: flex;
//   align-items: center;
//   justify-content: flex-start;


// `;