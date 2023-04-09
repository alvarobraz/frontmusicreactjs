import React from 'react';
import Home from "../../Home";
import { Container } from "./styles";
import Header from '../../Header/'

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  )
}