import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const ResourcesCard = ({ data, bg, color }) => {
  console.log("Resources Data", data)
  const image = getImage(data.image)
  return (
    <CaseCardItem color={color}>
      <Frame>
        <GatsbyImage image={image} />
      </Frame>
      <Divider color={color} />

      <Item>
        <SubItemLeft>Web</SubItemLeft>
        <SubItemRight>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.link}
          </a>
        </SubItemRight>
      </Item>
      <Divider color={color} />
      <p>Note</p>
      <Description>{data.description}</Description>
    </CaseCardItem>
  )
}

export default ResourcesCard

const CaseCardItem = styled.div`
  color: ${props => props.color};
  display: grid;
  padding: 10px;
  gap: 10px;
  border-radius: 7px;

  a {
    color: ${props => props.color};
  }
`

const Frame = styled.div`
  border: 10px solid white;
  border-radius: 3px;
`

const Divider = styled.div`
  height: 0.5px;
  background-color: ${props => props.color};
  opacity: 0.15;
`

const Item = styled.div`
  display: flex;
`
const SubItemLeft = styled.p`
  flex: 1;
  text-overflow: ellipsis;
`
const SubItemRight = styled.p`
  flex: 3;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Description = styled.p`
  line-height: 130%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`
