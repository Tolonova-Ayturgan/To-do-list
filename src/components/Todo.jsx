import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../store/slices/TodoSlice'
import Value from './Value'
import styled from 'styled-components'

const Todo = () => {

    const dispatch = useDispatch()
    const [state, setState] = useState("")

    console.log(state);

    const handleAddTodo = () =>{
        if(state.trim() !== ""){
            dispatch(addTodo({ id: Date.now(), text: state, completed: false}))
            setState("")
        }
    }

  return (
    <div>
      <div>
        <Input onChange={(el) => setState(el.target.value)} value={state} placeholder="Enter text..."/>
        <Button onClick={handleAddTodo}>ADD</Button>
      </div>
        <Value />
    </div>
  )
}

export default Todo


