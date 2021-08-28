import React from "react"
import styled from "styled-components"

const HeroesOne = () => {
  return (
    <Section>
      <LeftSection>
        <Title>I Choose Inter</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          eum laboriosam? Illo animi distinctio est officiis aliquam vel
          possimus magnam, nisi cupiditate dicta labore incidunt beatae ut
          accusantium enim explicabo.
        </Description>
        <Button href="http://">Get Started</Button>
      </LeftSection>
      <RightCard />
    </Section>
  )
}

export default HeroesOne

const Section = styled.section`
  /* this section were previously applied with global styling  */
  @media (max-width: 768px) {
    gap: 30px;
    flex-direction: column;
  }
  @media (max-width: 530px) {
    gap: 20px;
    flex-direction: column;
  }
`
const LeftSection = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`

const RightCard = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`

const Title = styled.h1`
  font-size: 48px;
  letter-spacing: -1.45pt;
  font-weight: 600;
`
const Description = styled.p`
  font-size: 16px;
  letter-spacing: -0.43pt;
  font-weight: 400;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.7);
`

const Button = styled.a`
  background-color: black;
  color: white;
  padding: 15px;
  text-align: center;
`
