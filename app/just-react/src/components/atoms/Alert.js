import styled from 'styled-components'

const AlertStyled = styled.div``

function Alert(props) {
  return (
    <AlertStyled 
      {...props}
      className={`${props.className} alert alert-danger`}
    >{props.children}</AlertStyled>
  );
}

export default Alert;
