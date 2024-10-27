import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px); /* O container ocupa a altura total disponível */
  overflow: auto; /* Remove a rolagem */


  @media (max-width: 600px) {
    height: auto; /* Ajusta a altura para telas menores */
    padding: 20px; /* Adiciona um padding para telas menores */
  }
`;

export const Content = styled.div`
  width: 100%; /* Usa 100% da largura disponível */
  max-width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 760px) {
    flex-direction: column-reverse; /* Ajusta o layout para empilhamento */
    justify-content: center; /* Centraliza verticalmente o conteúdo */
    height: 100%; /* Garante que ocupe a altura total */
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%; /* Usa toda a largura disponível em telas menores */
    padding: 10px; /* Reduz o padding para telas menores */
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  color: #333; /* Cor de texto suave e contrastante */

  @media (max-width: 760px) {
    width: 90%;
  }
  @media (min-width: 761px) and (max-width: 2160px) {
    margin-top: 400px;
  }

  @media (max-width: 600px) {
    width: 100%; /* Ocupa toda a largura em telas menores */
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: #ff6f61; /* Cor viva e contrastante */

  @media (max-width: 760px) {
    font-size: 25px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 20px; /* Reduz o tamanho da fonte em telas menores */
  }
`;

export const Function = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  color: #333; /* Suave e legível */

  @media (max-width: 600px) {
    font-size: 14px; /* Reduz o tamanho da fonte para telas menores */
  }
`;

export const Intro = styled.span`
  text-align: justify;
  color: #555; /* Texto mais escuro para maior contraste */

  p {
    padding: 10px;
  }

  @media (max-width: 760px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 14px; /* Reduz o tamanho da fonte para melhor leitura */
    text-align: justify; /* Centraliza o texto em telas menores */
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  background-color: #6ca0dc; /* Botão com cor suave */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: #5a91d8; /* Efeito hover */
  }

  @media (max-width: 600px) {
    width: 100%; /* O botão ocupa toda a largura em telas menores */
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%; /* Torna a imagem responsiva */
    max-width: 11rem; /* Limita a largura máxima da imagem */
    height: auto; /* Mantém a proporção da imagem */
    margin-bottom: 20px;
    border-radius: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #d4f1f4; /* Fundo de imagem com cor suave */
  }

  @media (min-width: 601px) and (max-width: 760px) {
    width: 90%;
    margin-top: 400px;
    margin-bottom: 20px; /* Adiciona espaço entre o conteúdo e a imagem */
  }

  @media (max-width: 600px) {
    width: 100%; /* Ocupa toda a largura disponível */
    img {
      max-width: 10rem; /* Ajusta o tamanho máximo da imagem em telas menores */
    }
      @media (max-width: 600px) {
    width: 100%; /* Ocupa toda a largura disponível */
    img {
      max-width: 10rem; /* Ajusta o tamanho máximo da imagem em telas menores */
    }
  }
`;

export const Img = styled.img``;
