import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
        <Inputs
            className={props.className}
            onChange={props.onChange}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}  
            style={props.style}
        />
      
  )
}

export default Input

const Inputs = styled.input`
    margin-top: 20px;
    width: 900px;
    height: 40px;   
    border-radius: 10px;
`
