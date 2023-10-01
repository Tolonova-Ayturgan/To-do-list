import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Global>
        <H1>To do list</H1>
      <Main>
        <p>Home</p> 
        <p>|</p>
        <p>About</p>
      </Main>
    </Global>
  )
}

export default Header


const Global = styled.div`
    background: #000011;
    width: 99.9%;
    border: 1px solid #181818;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const H1 = styled.h1`
    color: white;
`

const Main = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    color: white;
`