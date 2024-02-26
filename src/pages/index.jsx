'use client'

import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img, } from '../styles/indexStyle'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

export default function Home() {

  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou o Junior Melo!</Name>
          <Function>Graduado em TI.</Function>
          <Intro>Sou Graduado em Análise e Desenvolvimento de Sistemas pela Universidade Tiradentes de Pernambuco.
            Tenho experiências acadêmicas na área de desenvolvimento Web
            (React, NextJs, JS, HTML e CSS) e Back-End com Java e Spring Boot.
          </Intro>
          <Link className={styles.link} href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/Jr.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}
