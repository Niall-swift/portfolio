import styled from "styled-components";


export const Conteiner = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  position: fixed;
  z-index: 99;
  top: 0;
  background: transparent;
  backdrop-filter: blur(12px);
  background: rgba(16 18 27 / 40%);
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