import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, StyledLink } from '../../styles/styleProjects';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/JuniorMeloDev/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          const data = await res.json();
          setItemsApi(data);
        })
        .catch(e => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              {/* Use o StyledLink em vez de <a> */}
              <Url>
                URL: <StyledLink href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</StyledLink>
              </Url>
              <Created_at>
                Data Criação: { Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
