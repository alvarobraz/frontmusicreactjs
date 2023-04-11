import styled from 'styled-components'

import search from '../../assets/images/search.svg';

export const Container = styled.header`
  background: var(--backgroundHeader);
`;

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;

  padding: 0 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    position: relative;
    top: 15px;
    color: #fbfbfb
  }

  h1.playmusics {
    position: relative;
    font-size: 1.3rem;
    color: #fafafa;
    top: 15px;
    left: 0.4rem
  }

  form {
    position: relative;
    top: 15px;
    left: 2%;
    padding-right: 1rem;

    h1 {
      padding: 0 1rem;
    }

    input {
      font: 12px 'Poppins', sans-serif;
      width: 110%;
      height: 2rem;
      padding: 8px 45px 7px 15px;
      border: #8d99ae solid 1px;
      border-radius: 4px;
      background: url(${search}) 1rem 0.5rem no-repeat rgb(255, 255, 255);
      background-color:  rgb(255, 255, 255);
      background-position: right 10px center;
    }

    input:focus-visible {
      border: #8d99ae solid 1px;
    }

  }

  .ButtonsCategorys {
    position: relative;
    left: 2%;
    height: 2rem;
    margin-left: 1rem;

    button:first-child {
      margin-left: 1rem
    }

    button {
      margin: 0rem 0px 0px 0;
      padding: 2px 20px;
      background-color: var(--darkPurple);
      height: 4rem;
      color: rgb(255, 255, 255);
      font-size: 12px;
      border: medium none;
      transition: all 0.2s ease 0s;2s;
      &:hover {
        background-color: var(--lightPurple);
        transition: 0.2s;
      }
    }
  }

  .avatar {
    position: fixed;
    right: 12%;
  
    img{
      top: 2%;
    }
  }


`;