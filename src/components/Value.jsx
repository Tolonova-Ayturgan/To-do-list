import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo, toggleTodo } from '../store/slices/TodoSlice'
import CheckBox from '../UI/CheckBox'
import Button from '../UI/Button'

const Value = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const handleToggle = (id) =>{
        dispatch(toggleTodo(id))
    }
    const handleDelete = (id) =>{
        dispatch(deleteTodo(id))
    }


  return (
    <div>
        <MainDiv>
            {todos.map((todo) => (
                <GlobalDiv key={todo.id}>
                    <CheckBox onClick={() => handleToggle(todo.id)} type="checkbox" style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}/>
                    <Div>
                        <span
                            onClick={() => handleToggle(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            >
                            {todo.text}
                        </span>
                        <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
                    </Div>
                </GlobalDiv>
            ))}
       </MainDiv>
    </div>
  )
}

export default Value

const MainDiv = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const GlobalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 70.9%;
    height: 60px;
    background-color: #c9c9cc;
    margin-top: 10px;
    border-radius: 10px;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1020px;
`