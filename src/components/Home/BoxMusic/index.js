import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Content } from "./styles";

export function BoxMusic({image, author, title, keyWords, id}) {
  return (
    <NavLink to={`musicas/${id}`}>
      <Container>
        <Content>
        <img src={image} width="230px" alt=""/>
        <h1>{author}</h1>
        <p>{title}</p>
        <p className='span'>{keyWords}</p>
        </Content>
      </Container>
    </NavLink>
  )
}