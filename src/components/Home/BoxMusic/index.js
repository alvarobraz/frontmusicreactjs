import React from 'react';
import { Container, Image, TitleMusic, KeyWords, Content } from "./styles";
// import { NavLink } from 'react-router-dom'
import ImgVegas from '../../../assets/images/musics/vegas.webp'

export function BoxMusic() {
  return (
    <Container>
     <Content>
      <Image>
        <img src={ImgVegas} alt=""/>
      </Image>
      <TitleMusic>
        Vegas-Bae Bae (Invader Space RMX)
      </TitleMusic>
      <KeyWords>
        Eletrônico, Trance, Vegas, Psy
      </KeyWords>
     </Content>
    </Container>
  )
}