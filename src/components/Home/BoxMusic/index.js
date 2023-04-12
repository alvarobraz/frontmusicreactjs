import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Content } from "./styles";
import {
  espacoVirgula 
} from '../../../utils'

export function BoxMusic({image, author, title, keyWords, categoryName, id}) {
  return (
    <NavLink to={`musicas/${id}`}>
      <Container>
        <Content>
        <img src={image} width="230px" alt=""/>
        <h1>{author}</h1>
        <p>{title}</p>
        {
          categoryName ?
          <p className='span'>{categoryName}</p>
          :
          ''
        }
        <p><i>{espacoVirgula(keyWords)}</i></p>
        </Content>
      </Container>
    </NavLink>
  )
}