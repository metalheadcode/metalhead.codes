import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <Seo title="METALHEAD.CODES" />
    <Wrapper>
      <Card>
        <Title>Welcome to 🤘🏻💻</Title>
        <Description>
          I dont have much time atm 👨🏻‍💻, I'll call you back 🎸
        </Description>
        <Button
          to="https://wa.me/60168532998?text=Hi%20bro,%20nice%20website%20LOL"
          target="_blank"
        >
          ⚡️ Whatsapp Me Also Can
        </Button>
      </Card>
    </Wrapper>
  </div>
)

export default IndexPage

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`

const Card = styled.div`
  max-width: 360px;
  border: 5px solid #f3f0e8;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  gap: 20px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: #f3f0e8;
  line-height: 130%;
`
const Description = styled.p`
  line-height: 130%;
  color: #f3f0e8;
`

const Button = styled(props => <Link {...props} />)`
  color: #1e1e1e;
  background-color: #f3f0e8;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`
