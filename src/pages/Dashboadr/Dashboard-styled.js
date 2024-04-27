import styled from "styled-components";
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'

export const Conteiner = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  backdrop-filter: blur(12px);
  background: rgba(16 18 27 / 70%);

  >div{
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 500px;
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
