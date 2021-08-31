import React, { useEffect } from "react"
import styled from "styled-components"

const ParallexOne = () => {
  const [offsetY, setOffsetY] = React.useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  console.log(offsetY)

  useEffect(() => {
    // compoenent did mount
    window.addEventListener("scroll", handleScroll)

    // component did update
    // component did unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Section>
      <Wrapper>
        <MovingBigText style={{ transform: `translateX(${offsetY * 0.5}px)` }}>
          Web Design
        </MovingBigText>
        <MovingBigText style={{ transform: `translateX(${offsetY * -1}px)` }}>
          ReactJS
        </MovingBigText>
        <MovingBigText style={{ transform: `translateX(${offsetY * 0.7}px)` }}>
          3D Modelling
        </MovingBigText>
        <MovingBigText style={{ transform: `translateX(${offsetY * -0.5}px)` }}>
          Firebase
        </MovingBigText>
      </Wrapper>
    </Section>
  )
}

export default ParallexOne

const Section = styled.section`
  padding: 200px 20px;
  background-color: grey;
  color: white;
  overflow: hidden;
`

const Wrapper = styled.div``

const Object = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`
const MovingBigText = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 100px;
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-fill-color: transparent;

  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: white;
  }
`
