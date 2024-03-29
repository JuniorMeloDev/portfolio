import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  color: white;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;


  @media (max-width: 760px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const Function = styled.span`
  color: black;
  margin-bottom: 10px;
  font-weight: 500;
  color: white;
`;

export const Intro = styled.span`
  text-align: justify;
  color: white;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;

  svg {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 17rem;
    height: 20rem;
    border-radius: 100px;
    box-shadow: 0 0 10px rgba(1, 1, 1, 1);
    background-color: #87CEFA;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    img {
      width: 11rem;
      height: 12rem;
    }
  }
`;

export const Img = styled.img``;
