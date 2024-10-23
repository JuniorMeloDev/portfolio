import React from 'react';
import { Container, Content } from '../../styles/styleContact'; // Verifique o caminho
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import ItemContact from '../../components/ItemContact';
import Link from 'next/link';

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
        <Link href='https://wa.me/5581987068245'>
          <ItemContact
            IconFa={FaPhone}
            LinkContact="(81) 98706-8245"
          />
        </Link>
      </Content>
    </Container>
  );
}
