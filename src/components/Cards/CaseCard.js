import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CaseCard = ({ data }) => {
  // designer,
  // year,
  // location,
  // link,
  // desc,
  return (
    <CaseCardItem>
      <CardTitle>{data.id}</CardTitle>
      <Divider />
      <Item>
        <SubItemLeft>Designer</SubItemLeft>
        <SubItemRight>{data.designer}</SubItemRight>
      </Item>
      <Divider />
      <Item>
        <SubItemLeft>Year</SubItemLeft>
        <SubItemRight>{data.year}</SubItemRight>
      </Item>
      <Divider />
      <Item>
        <SubItemLeft>Location</SubItemLeft>
        <SubItemRight>{data.location}</SubItemRight>
      </Item>
      <Divider />
      <Item>
        <SubItemLeft>https://</SubItemLeft>
        <SubItemRight>
          <a href={`https://` + data.link} target="_blank" rel="noreferrer">
            {data.link}
          </a>
        </SubItemRight>
      </Item>
      <Divider />
      <p>Description</p>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat
        magni quibusdam tempora quo et doloribus culpa iusto ex ipsum
        reprehenderit perferendis repellendus dolores odio debitis dolorem
        soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam
        reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe
        fugiat voluptatum nulla ex temporibus.
      </Description>
      <Divider />
      <Link to="#">Click Here</Link>
    </CaseCardItem>
  )
}

export default CaseCard

const CaseCardItem = styled.div`
  color: white;
  display: grid;
  padding: 10px;
  gap: 10px;
  /* border: 1px solid white; */

  a {
    color: white;
  }
`

const Divider = styled.div`
  height: 0.5px;
  background-color: rgba(255, 255, 255, 0.4);
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
  line-clamp: 3;
  -webkit-line-clamp: 2;
`
