import React from "react"
import styled from "styled-components"

const HeroesTwo = () => {
  return (
    <BgRelative>
      <Section>
        <LeftSection>
          <Card>
            <Title>I Choose Inter</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, eum laboriosam? Illo animi distinctio est officiis
              aliquam vel possimus magnam, nisi cupiditate dicta labore incidunt
              beatae ut accusantium enim explicabo.
            </Description>
            <Button href="http://">Get Started</Button>
          </Card>
          <Card>
            <Title>I Choose Inter</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, eum laboriosam? Illo animi distinctio est officiis
              aliquam vel possimus magnam, nisi cupiditate dicta labore incidunt
              beatae ut accusantium enim explicabo.
            </Description>
            <Button href="http://">Get Started</Button>
          </Card>
          <Card>
            <Title>I Choose Inter</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, eum laboriosam? Illo animi distinctio est officiis
              aliquam vel possimus magnam, nisi cupiditate dicta labore incidunt
              beatae ut accusantium enim explicabo.
            </Description>
            <Button href="http://">Get Started</Button>
          </Card>
        </LeftSection>
        <BigBgImage />
      </Section>
    </BgRelative>
  )
}

export default HeroesTwo

const BgRelative = styled.div`
  position: relative;
`
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
  width: 50%;
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 530px) {
    width: 100%;
  }
`

const Card = styled.div`
  display: grid;
  gap: 20px;
  background-color: white;
  padding: 30px;
`
const BigBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
