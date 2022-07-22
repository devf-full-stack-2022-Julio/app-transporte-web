import styled from 'styled-components'

const InputStyled = styled.input``

function Input(props) {
  return (
    <InputStyled 
      {...props}
      className={`${props.className} form-control`}
    />
  );
}

export default Input;