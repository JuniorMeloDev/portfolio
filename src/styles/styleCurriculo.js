import styled from "styled-components";

// Estilo para garantir que o fundo da página seja consistente
export const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: #f0f8ff; /* Cor de fundo que está sendo usada no Container */
  min-height: 100vh; /* Garante que cubra a altura inteira da tela */
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: black; /* Cor de fundo */
  flex-grow: 1; /* Isso vai ajudar a preencher o espaço disponível na tela */
`;

export const H2 = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  width: 40%;
  font-size: 1em;
  color: #333;

  h3 {
    color: #007bff;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2em;
    color: #333;
    margin: 5px 0;
  }

  p {
    font-size: 0.9em;
    color: #666;
  }
`;

export const RightColumn = styled.div`
  width: 55%;
  font-size: 1em;
  color: #555;
  line-height: 1.6;
`;

export const QualificationSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permitir que os cards quebrem de linha se necessário */
  gap: 20px; /* Espaçamento entre os cards */
`;

// Estilo de cada card de formação, para alinhamento lado a lado
export const QualificationColumn = styled.div`
  font-size: 1em;
  color: #555;
  h3 {
    color: #007bff;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2em;
    color: #333;
    margin: 5px 0;
  }
  line-height: 1.6;
  width: auto; /* Deixa o card se ajustar ao conteúdo */
  min-width: 400px; /* Define um valor mínimo de largura para garantir consistência visual */
  flex-grow: 1; /* Permite que os cards cresçam igualmente se houver espaço */
`;

export const HabilityColumn = styled.div`
  font-size: 1em;
  color: #555;
  line-height: 1.6;
  width: auto; /* Deixa o card se ajustar ao conteúdo */
  min-width: 400px; /* Define um valor mínimo de largura para garantir consistência visual */
  flex-grow: 1; /* Permite que os cards cresçam igualmente se houver espaço */

  ul {
    list-style-type: none; /* Remove os pontos da lista */
    padding: 0; /* Remove o espaçamento padrão à esquerda */
    margin: 0; /* Remove as margens padrão */
    display: grid; /* Define o layout de grid */
    grid-template-columns: repeat(2, 1fr); /* Cria duas colunas */
    gap: 10px; /* Adiciona um espaçamento entre os itens */
  }

  li {
    margin-bottom: 10px; /* Adiciona espaçamento entre os itens da lista */
    position: relative; /* Necessário para posicionar o quadrado */
    padding-left: 25px; /* Espaço para o quadrado */
  }

  /* Estilo para o quadrado azul antes de cada item */
  li::before {
    content: ''; /* Garante que o elemento seja exibido */
    position: absolute;
    left: 0; /* Posição à esquerda do item */
    top: 0;
    width: 15px;
    height: 15px;
    background-color: #007bff; /* Cor azul */
    border-radius: 3px; /* Deixa as bordas levemente arredondadas, ou remova se quiser bordas 100% quadradas */
  }

  h3 {
    color: #007bff;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2em;
    color: #333;
    margin: 5px 0;
  }
`;
