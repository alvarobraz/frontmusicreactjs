import React from 'react';
import { Container, Image, TitleMusic, Author, KeyWords, Content } from "./styles";
// import { NavLink } from 'react-router-dom'
// import ImgVegas from '../../../assets/images/musics/vegas.webp'

export function BoxMusic({image, author, title, keyWords}) {
  return (
    <Container>
     <Content>
     <img src={image} width="230px" alt=""/>
     <h1>{author}</h1>
     <p>{title}</p>
     <p className='span'>{keyWords}</p>
     </Content>
    </Container>
  )
}