import React from "react"
import styled from "styled-components"
import CollectionsCard from "../Cards/CollectionsCard"

const Collections = ({ collections }) => {
  return (
    <Section>
      <Wrapper>
        <BigTitle>
          <Title>Collections</Title>

          <SectionDescription>
            I created this section to replace my Pinterest collections. And, to
            make my website got something to display 😅. Anyway, let's talk
            about you. Why you're here?{" "}
            <a
              href="https://api.whatsapp.com/send?phone=60168532998"
              target="_blank"
            >
              Whatsapp
            </a>{" "}
            me, so I can know you better. 😉
          </SectionDescription>
        </BigTitle>

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

const BigTitle = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  word-break: break-all;
`
const Title = styled.h1`
  font-size: 110pt;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 64pt;
  }
`
const SectionDescription = styled.p`
  padding-top: 20px;
  max-width: 800px;
  line-height: 140%;

  a {
    text-decoration: underline;
    color: yellow;
    font-weight: bold;
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
