import React from 'react';
import styled from 'styled-components'

const H = styled.div`
background-color: #15223b;
width: 100%;
margin: 0;
padding: 10px;
color: white;
`

const Title = styled.h2`
margin: 0;
padding: 0;
`

const Header = () => {
  return (<H>
    <Title>Realtime Chat App</Title>
  </H>)
}

export default Header;