import React from 'react';
import { Container } from "./styles";

export default function Dashboard(props) {
  return (
    <Container>
      {props.children }
    </Container>
  )
}