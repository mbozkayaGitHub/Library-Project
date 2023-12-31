import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from './Login.style'
import { useNavigate } from 'react-router-dom'



const Login = ({setCurrentUser}) => { 

  const navigate = useNavigate()

const handleSubmit = (e) => {
e.preventDefault();
setCurrentUser("mike")
sessionStorage.setItem("user", "mike")
navigate(-1)
}
 
  return (
    <LoginContainer>
      
<FormContainer>
<Header>Login Here</Header>
  <StyledForm onSubmit={handleSubmit}> 
    <StyledInput type="text"
    placeholder ="Username"  required/>
    <StyledInput type="password"
    placeholder="password" required/>
    <StyledButton type='submit'> Login</StyledButton>
  </StyledForm>
</FormContainer>
      
      
      </LoginContainer>
  )
}

export default Login