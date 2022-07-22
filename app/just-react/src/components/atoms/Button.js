import styled from 'styled-components'

const ButtonStyled = styled.button``

function Button(props) {
  return (
    <ButtonStyled 
      {...props}
      className={`${props.className} btn btn-primary btn-md`}
    />
  );
}

export default Button;
