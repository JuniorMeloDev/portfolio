import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

