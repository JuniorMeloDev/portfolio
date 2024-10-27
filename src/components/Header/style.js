import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0000ff, #00ffff);

`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

`;

export const Title = styled.div`
  font-size: 30px;
  color: #fff; /* Cor de título em branco para contraste */
  
  @media (min-width: 561px) and (max-width: 760px) {
    font-size: 20px;
    text-align: left;
    
}

`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  
  a {
    color: #fff; /* Cores dos links em branco */
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff6f61; /* Cor viva no hover */
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
    background: linear-gradient(90deg, #00799d, #ff6f61); /* Gradiente para mobile */
    position: fixed;
    height: 100%;
    top: 0;
    right: ${props => props.sidebar ? '0' : '-100%'};
    width: 60%;
    transition: right 0.5s ease;

    a {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      
      &:hover {
        color: #ff6f61; /* Cor viva no hover para mobile */
      }
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: #E6E6FA; /* Cor para link ativo */
    color: #00799d;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }

  @media (min-width: 561px) and (max-width: 690px) {
    font-size: 15px;
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  color: #fff; /* Cor do ícone do menu */
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  position: absolute;
  right: 15px;
  top: 35px;
  cursor: pointer;
  color: #fff;
  display: none; /* Oculto por padrão */

  /* Exibe o ícone 'X' quando a barra lateral estiver ativa */
  @media (max-width: 760px) {
    display: ${props => (props.sidebar ? 'flex' : 'none')}; /* Mostra apenas se a sidebar estiver aberta */
  }
`;

export const ContentTitle = styled.div`
  text-align: end;

  a {
    color: #fff; /* Cores dos links dentro do título */
    
    &:hover {
      color: #ff6f61; /* Cor viva no hover */
    }
  }
`;

export const SubTitle = styled.span`
  color: #fff; /* Cor do subtítulo */
  

  @media (min-width: 561px) and (max-width: 644px) {
    display: flex;
    padding-right: 50px;
  }
`;

