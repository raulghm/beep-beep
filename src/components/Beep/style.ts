import styled from 'styled-components'

const AddTodo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .Beep-body {
    padding: 1em;
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }

  .Beep-button {
    margin: 0 auto;
    padding-bottom: 90%;
    width: 90%;
    border-radius: 50%;
    border: 14px solid black;
    background: linear-gradient(to bottom, #31cac2, #1a7571);
    cursor: pointer;
    box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.1);
  }

  input {
    font-size: 2rem;
    padding: .4em;
    margin: .4em 0;
  }
`

export default AddTodo
