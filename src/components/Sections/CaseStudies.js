import React from "react"
import styled from "styled-components"
import CaseCard from "../Cards/CaseCard"

const CaseStudies = ({ caseStudies }) => {
  const caseStudiesData = caseStudies.nodes
  return (
    <Section>
      <Wrapper>
        <BigTitle>Case Studies</BigTitle>
        <CardGrid>
          {caseStudiesData.map(data => (
            <CaseCard
              key={data.originalId}
              data={data}
              color="#EBE4E4"
              bg="#0d1821"
            />
          ))}
        </CardGrid>
      </Wrapper>
    </Section>
  )
}

export default CaseStudies

const Section = styled.section`
  background: #0d1821;
  color: #ebe4e4;
  padding: 15px;
  min-height: 100vh;
`
const Wrapper = styled.div``

const BigTitle = styled.h1`
  font-size: 110pt;
  font-weight: 700;
  padding-top: 64px;
  padding-bottom: 64px;
  word-break: break-all;

  @media (max-width: 500px) {
    font-size: 64pt;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 15px;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 1620px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 970px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 710px) {
    grid-template-columns: repeat(1, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
