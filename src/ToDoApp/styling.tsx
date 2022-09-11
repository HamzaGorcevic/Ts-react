

import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const Body =createGlobalStyle`
    body{
        background-color: purple;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 99vh;
    }
`

export const GlobalStyle = createGlobalStyle`
  body {
    background:purple;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

export const Appl = styled.div`
    background-color: #1da33a;
    height: 600px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`
export const Form = styled.div `
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
`

export const Input = styled.input`
    border-radius: 10px;
    width: 50%;
    height: 40px;
    outline: none;
    border: none;
    border: 1px orange solid;
    font-size: 30px;
`
export const Button = styled.button`
    width: 100px;
    background-color: greenyellow;
    color: white;
    border: none;
    border-radius: 5px;

`

////// ToDoTask

export const TaskStyle = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    background-color: white;
    width: 80%;
    border-radius: 10px;
    height: 40px;

`
export const TextStyle = styled.p`
    color: orange;
    font-weight: 1000;
`