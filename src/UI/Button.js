import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Buttons 
        className={props.className}
        onClick={props.onClick} 
        variant={props.variant} 
        disabled={props.disabled} 
        style={props.style}
        {...props}>
        {props.children}
    </Buttons>
  )
}

export default Button

const Buttons = styled.button`
    height: 45px;
    width: 100px;
    border-radius: 10px;
    background-color: #1f2851;
    color: white;
    margin-left: 20px;
`