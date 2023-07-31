import React from 'react'
import { Container, Content } from '../../styles/styleContact'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../components/ItemContact'
import Link from 'next/link'


export default function Contact() {
  return (
    <Container>
      <Content>
        <Link href='https://linkedin.com/in/josé-carlos-de-melo-junior-5173b4189'>
          <ItemContact
            IconFa={FaLinkedin}
            LinkContact="https://linkedin.com/in/josé-carlos-de-melo-junior-5173b4189"
          />
        </Link>
        <Link href="https://github.com/JuniorMeloDev">
          <ItemContact
            IconFa={FaGithub}
            LinkContact="https://github.com/JuniorMeloDev"
          />
        </Link>
        <Link href='mailto:juninhotj_@hotmail.com'>
          <ItemContact
            IconFa={FaEnvelope}
            LinkContact="juninhotj_@hotmail.com"
          />
        </Link>
      </Content>
    </Container>
  )
}
