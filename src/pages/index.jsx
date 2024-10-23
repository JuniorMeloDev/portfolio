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
          <Intro><p>Sou apaixonado por Economia e Tecnologia, o que me levou a me formar em Ciências Econômicas e Análise e Desenvolvimento de Sistemas.</p>
            <p>Acompanho o mercado financeiro de perto e sou entusiasta da análise de dados, especialmente na área financeira. Utilizo ferramentas como Power BI e Python, além de planilhas Excel, para criar insights valiosos e auxiliar na tomada de decisões. Também tenho grande interesse em Desenvolvimento Web, trabalhando com tecnologias como HTML, CSS, JavaScript, React e Next.js.</p>
            <p>Atualmente, estou aprimorando minhas habilidades na língua inglesa por meio de aulas online e aplicativos. Sou focado em resultados, organizado e meticuloso, além de ser proativo. Tenho experiências em trabalhar com metas e em equipes colaborativas.</p>
          </Intro>
          <Link className={styles.link} href="projetos">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
          <Link className={styles.link} href="curriculo">
            <LinkProjects>CURRÍCULO <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/Jr.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}
