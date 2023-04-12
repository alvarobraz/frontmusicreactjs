import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 17rem;
`

export const Content = styled.button`
  position: relative;
  max-width: 230px;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  background: transparent;
  left: -4%;
  top: -35px;

  &:hover {
    border: none;
  }

  img {
    max-width: 230px;
    height: auto;
    margin-bottom: 10px;
  }

  h1 {
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
    text-align: left;
    text-decoration: none;
  }

  p {
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 0.7rem;
    text-align: left;
  }

  .span {
    position: relative;
    color: var(--darkPurple);
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-bottom: 1rem;
    text-align: left;
  }

`


// export const Image = styled.div`
//   position: relative;
//   max-width: 230px;
//   height: auto;
//   margin-bottom: 10px;
// `

// export const Author = styled.h1`
//   color: var(--darkPurple);
//   font-family: 'Roboto', sans-serif;
//   font-size: 15px;
//   text-transform: uppercase;
//   margin-bottom: 0.7rem;
//   text-align: left;
// `

// export const TitleMusic = styled.p`
//   color: var(--darkPurple);
//   font-family: 'Roboto', sans-serif;
//   font-size: 15px;
//   margin-bottom: 0.7rem;
//   text-align: left;
// `

// export const KeyWords = styled.span`
//   color: var(--darkPurple);
//   font-family: 'Roboto', sans-serif;
//   font-size: 12px;
//   margin-bottom: 1rem;
// `
