import styled from "styled-components";

export const Conteiner = styled.section`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9;
  position: absolute;
  overflow-y: auto;
  inset: 0;
  background: #00000069;
  display: ${props => (props.isVisible === true ? 'flex' : 'none')};
`

export const NavBar = styled.nav.attrs(props =>({
  disabled: props.isVisible,
}))`
  width: 25%;
  height: 90%;
  position: fixed;
  z-index: 20px;
  left: ${props => (props.isVisible === true ? '10px' : '-700px')};
  padding: 1em;
  margin-left: 2.7em;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: #696969;
`