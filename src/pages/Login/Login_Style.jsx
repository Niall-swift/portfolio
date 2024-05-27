import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    position: absolute;
    bottom: 70px;
    color: #fff;
    letter-spacing: 3px;
    z-index: 9;
    text-align: center;
  }
`

export const VideoBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    video {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  z-index: 9;
  cursor: pointer;
  transition: all 500ms ease-in-out;

  img{
    width: 340px;
    height: 340px;
    border-radius: 50%;
    object-fit: cover;
    padding: 0.5em;
  }

  &:hover{
    border: 5px solid #fff;
    box-shadow: 0 0 30px 15px #c2c2c2;
    transition: 500ms ease-in-out;
  }
`