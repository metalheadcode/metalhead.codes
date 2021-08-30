import React from "react"
import styled from "styled-components"
import { useTheme } from "../../context/theme.context"

// nanti bawak balik masuk section styling from global layout ke dalam ni
// rasa macam tak cukup modular

const HeroesOne = () => {
  const [dark] = useTheme()
  return (
    <Section dark={dark}>
      <Wrapper>
        <LeftSection>
          <Title>I Choose Inter</Title>
          <Description dark={dark}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum laboriosam? Illo animi distinctio est officiis
            aliquam vel possimus magnam, nisi cupiditate dicta labore incidunt
            beatae ut accusantium enim explicabo.
          </Description>
          <Button dark={dark} href="http://">
            Get Started
          </Button>
        </LeftSection>
        <RightCard />
      </Wrapper>
    </Section>
  )
}

export default HeroesOne

const Section = styled.section`
  padding: 200px 20px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  max-width: 1028px;
  margin: auto;

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
  background-color: black;
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
  color: ${props => (props.dark ? "rgba(255, 255, 255, 0.7)" : "black")};
`

const Button = styled.a`
  background-color: ${props => (props.dark ? "white" : "black")};
  color: ${props => (props.dark ? "black" : "white")};
  padding: 15px;
  text-align: center;
`
