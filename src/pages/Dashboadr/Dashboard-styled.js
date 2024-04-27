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
    align-items: center;
    flex-direction: column;
    width: 500px;

    >h1,h2{
      text-align: center;
    }
  }
`
