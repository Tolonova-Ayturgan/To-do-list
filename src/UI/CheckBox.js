import React from 'react'
import styled from 'styled-components'

const CheckBox = (props) => {
  return (
      <Input 
            className={props.className}
            onChange={props.onChange}
            onClick={props.onClick}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}  
            style={props.style}
    />
  )
}

export default CheckBox


const Input = styled.input`
    position: relative;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 2.0em;
    background-color: #1f2851;
    border-radius: 50%;
    transition: .4s;
`

