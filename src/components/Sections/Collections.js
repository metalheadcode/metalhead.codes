import React from "react"
import styled from "styled-components"
import CollectionsCard from "../Cards/CollectionsCard"

const Collections = ({ collections }) => {
  return (
    <Section>
      <Wrapper>
        <BigTitle>Collections</BigTitle>
        <CardGrid>
          {collections.nodes.reverse().map(data => (
            <CollectionsCard
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

export default Collections

const Section = styled.section`
  background: #0d1821;
  color: #ebe4e4;
  padding: 15px;
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
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 710px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
