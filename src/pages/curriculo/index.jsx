import React from 'react';
import { Body, Container, Content, Card, Section, LeftColumn, RightColumn, H2, QualificationColumn, QualificationSection, HabilityColumn } from '../../styles/styleCurriculo';

export default function Curriculo() {
  return (
    <Body>
      <Container>
        <Content>
          <H2>
            <h2>Experiência</h2>
          </H2>
          {/* Card para a primeira experiência */}
          <Card>
            <Section>
              <LeftColumn>
                <h3>2024 - Atual</h3>
                <h4>Analista Financeiro</h4>
                <p>Recife Rações</p>
                <p>Cabo de Santo Agostinho, PE</p>
              </LeftColumn>
              <RightColumn>
                <p>
                  Contas a pagar e receber, DRE, conciliação bancária, análise de investimentos,
                  planejamento de gastos e orçamentos, e análise de dados com Power BI.
                </p>
              </RightColumn>
            </Section>
          </Card>

          {/* Card para a segunda experiência */}
          <Card>
            <Section>
              <LeftColumn>
                <h3>2021 - 2024</h3>
                <h4>Gerente Financeiro</h4>
                <p>Transrec Cargas Eireli</p>
                <p>Jaboatão dos Guararapes, PE</p>
              </LeftColumn>
              <RightColumn>
                <p>
                  Contas a pagar e receber, DRE, conciliação bancária, análise de receitas e despesas,
                  planejamento de gastos e orçamentos, compras e gerenciamento da frota.
                </p>
              </RightColumn>
            </Section>
          </Card>
          {/* Card para a terceira experiência */}
          <Card>
            <Section>
              <LeftColumn>
                <h3>2011 - 2019</h3>
                <h4>Caixa Bancário</h4>
                <p>Itaú Unibanco</p>
                <p>Recife PE</p>
              </LeftColumn>
              <RightColumn>
                <p>
                  Responsável por operações bancárias, venda de produtos e serviços, recomendação de investimentos, acompanhamento do fluxo de caixa, verificação de valores e documentos financeiros.
                </p>
              </RightColumn>
            </Section>
          </Card>
          <H2>
            <h2>Formação</h2>
          </H2>

          {/* Cards de formação */}
          <QualificationSection>
            <Card>
              <QualificationColumn>
                <h3>2006 - 2011</h3>
                <h4>Ciências Econômicas</h4>
                <p>Universidade Federal Rural de Pernambuco</p>
                <p>Recife PE</p>
              </QualificationColumn>
            </Card>

            <Card>
              <QualificationColumn>
                <h3>2021 - 2023</h3>
                <h4>Análise e Desenvolvimento de Sistemas</h4>
                <p>Universidade Tiradentes</p>
                <p>Recife PE</p>
              </QualificationColumn>
            </Card>

            <Card>
              <QualificationColumn>
                <h3>2024 - 2025</h3>
                <h4>MBA em Finanças Corporativas</h4>
                <p>Uninassau</p>
                <p>Recife PE</p>
              </QualificationColumn>
            </Card>
          </QualificationSection>

          <H2>
            <h2>Habilidades Profissionais</h2>
          </H2>
          {/* Cards de Habilidade */}
          <Card>
            <HabilityColumn>
              <ul>
                {/* Soft Skills */}
                <li>Proativo</li>
                <li>Mercado Financeiro</li>
                <li>Liderança</li>
                <li>Análise de Dados</li>
                <li>Trabalho em Equipe</li>
                <li>Finanças Corporativas</li>
                <li>Criatividade</li>
                <li>Planejamento Estratégico</li>
              </ul>
            </HabilityColumn>
          </Card>
        </Content>
      </Container>
    </Body>
  );
}