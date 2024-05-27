import styled from "styled-components";


export const Conteiner = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  position: absolute;
  z-index: 9;
  top: 0;
  background: transparent;
  backdrop-filter: blur(12px);
  background: #00000064;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`
export const ButtonMenu = styled.button`
  position: absolute;
  left: 50px;
`
export const Options = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ul{
    display: flex;
    list-style-type: none;
    a{
      margin-left: 2rem;
      margin-right: 3rem;
      padding: 0.7rem;
      cursor: pointer;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 19px;
      text-decoration: none;

      &:hover{
        background: #696969;
        box-shadow: 0 0 10px 1px #696969;
        animation: Hover 600ms ease-in-out;
      }
      @keyframes Hover {
        0%{
          box-shadow: 0 0 15px 5px #696969;
        }
        100%{
          box-shadow: 0 0 10px 1px #696969;
        }
      }
    }
  }
`