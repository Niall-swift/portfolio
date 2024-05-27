import styled from "styled-components";
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'

export const Conteiner = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-image: url(${avatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Iform = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(20px);
  background: rgba(16 18 27 / 70%);
  
  @media screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
  }

  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
  }
`
export const Redes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
  
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: none;
    color: #fff;
    border-radius: 10px;

    svg{
      padding: 5px;
      background: #696969;
      border-radius: 5px;
    }

    &:hover{
        box-shadow: 0 0 10px 1px #696969;
        animation: Hover 600ms ease-in-out;
        border:  2px solid  #696969;
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
  button:nth-child(n+2){
    margin-left: 5em;
  }
`

export const Title = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 3px;
  font-size: 1.5rem;
`

export const DownloadButton = styled.button`
  border: none;
  padding: 1rem;
  background: rgba(16 18 27 / 30%);
  border-radius: 5px;
  a{
    text-decoration: none;
    color: #fff;
  }
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
`
