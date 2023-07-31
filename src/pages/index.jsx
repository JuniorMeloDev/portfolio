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
          <Function>Estudante de Tecnologia</Function>
          <Intro>Estou no 5º período da Graduação em Análise e Desenvolvimento de Sistemas.
            Tenho experiências acadêmicas na área de desenvolvimento Web
            (React, NextJs, JS e outros), Back-End com Java e Spring Boot. Em busca da primeira oportunidade.
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
