import React from "react"
import styled from "styled-components"

const CaseCard = ({ data, bg, color }) => {
  // designer,
  // year,
  // location,
  // link,
  // desc,
  return (
    <CaseCardItem color={color}>
      <CardTitle>{data.originalId}</CardTitle>
      <Divider color={color} />
      <Item>
        <SubItemLeft>Designer</SubItemLeft>
        <SubItemRight>{data.designer}</SubItemRight>
      </Item>
      <Divider color={color} />
      <Item>
        <SubItemLeft>Date</SubItemLeft>
        <SubItemRight>{data.date}</SubItemRight>
      </Item>
      <Divider color={color} />
      {/* <Item>
        <SubItemLeft>Location</SubItemLeft>
        <SubItemRight>{data.location}</SubItemRight>
      </Item>
      <Divider color={color} /> */}
      <Item>
        <SubItemLeft>Web</SubItemLeft>
        <SubItemRight>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.link}
          </a>
        </SubItemRight>
      </Item>
      <Divider color={color} />
      <p>Description</p>
      <Description>{data.description}</Description>
      {/* <Divider color={color} />
      <Link to="#">Click Here</Link> */}
    </CaseCardItem>
  )
}

export default CaseCard

const CaseCardItem = styled.div`
  color: ${props => props.color};
  display: grid;
  padding: 10px;
  gap: 10px;
  border: 1px dotted ${props => props.color};
  border-radius: 7px;

  a {
    color: ${props => props.color};
  }
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

const CardTitle = styled.h1`
  font-weight: 300;
  font-size: 64px;
`
const Description = styled.p`
  line-height: 130%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`
