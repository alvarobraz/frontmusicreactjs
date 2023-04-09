import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.button`
  position: relative;
  /* max-width: 345px; */
  height: auto;
  display: wrap;
  flex-direction: column;
  border: none;
  background: transparent;
  /* left: -4%; */

  &:hover {
    border: none;
    background: transparent;
  }

`


export const Image = styled.div`
  position: relative;
  
  height: 188px;
  margin-bottom: 10px;
  /* left: -4%; */
`

export const TitleMusic = styled.div`
  position: relative;
  height: 2rem;
  color: var(--darkPurple);
  font-family: 'Roboto', sans-serif;
  margin-bottom: -0.5rem;
  /* left: -4%; */
`


export const KeyWords = styled.div`
  position: relative;
  height: auto;
  color: var(--darkPurple);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  margin-bottom: 1rem;
  /* left: -4% */
`
