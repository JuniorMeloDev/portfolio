import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
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
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
    a {
      color:black;
    }

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #00799d;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
 

    a {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: black;
      
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  
  &.active {
    background-color: #E6E6FA;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
    a {
      color:black;
    }
  
`;

export const SubTitle = styled.span``;
