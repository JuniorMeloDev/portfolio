import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Link href='/'>
            <Title>
              Junior Melo
            </Title>
            <SubTitle>
              Portfolio Pessoal
            </SubTitle>
          </Link>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          {/* Passar o estado sidebar para controlar a visibilidade do ícone 'X' */}
          <CloseSidebar sidebar={sidebar} onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>Sobre Mim</Ancora>
          </Link>
          <Link href="curriculo">
            <Ancora className={activeLink('curriculo')} onClick={showSiderbar}>Currículo</Ancora>
          </Link>
          <Link href="projetos">
            <Ancora className={activeLink('projetos')} onClick={showSiderbar}>Projetos TI</Ancora>
          </Link>
          <Link href="contato">
            <Ancora className={activeLink('contato')} onClick={showSiderbar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}
