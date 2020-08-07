import React from 'react';
import './App.css';
import styled, { ThemeProvider, css } from 'styled-components'

const theme = {
  primary: 'tomato',
  secondary: 'green',
  font: 'sans-serif',
  warning: 'yellow',
}

const Input = styled.input`
${(props) =>
    props.color && css`
  background:${(props) => props.theme[props.color]}`
  };
height:30px;
border:none;
margin-right:10px;
outline:none;
&:focus{
  background:pink;
}
`
const H1 = styled.h1`
font-size:3rem;
font-family:${props => props.theme.font}
`
const Form = styled.form`
padding:20px;
width:max-content;
height:max-content;
margin:0 auto;
box-shadow: 0 1px 5px rgba(0,0,0,0.3);
`

const Button = styled.button`
font-family:${props => props.theme.font}
font-size:1.3rem;
border:none;
border-radius:5px;
padding:7px 10px;
background:tomato;
background:${props => (props.primary ? 'tomato' : 'green')};
color:#fff;
&:hover{
  background-color:blue;
  cursor:pointer;
}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <Form>
          <Input type="text" color="warning" />
          <Button primary>Create</Button>
          <Button green>Create</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}

export default App;
