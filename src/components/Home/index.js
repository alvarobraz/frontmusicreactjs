import React from 'react';
import { BoxMusic } from "./BoxMusic";

import { Container, Content, Title } from "./styles";


export default function Home() {
  return (
    <Container>
      <Title>TODAS AS MÚSICAS</Title>
      <Content>
        <BoxMusic/>
        <BoxMusic/>
        <BoxMusic/>
        <BoxMusic/>
        <BoxMusic/>
        <BoxMusic/>
      </Content>
    </Container>
  )
}