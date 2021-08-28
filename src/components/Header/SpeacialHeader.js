import React from "react"
import styled from "styled-components"

const SpeacialHeader = () => {
  return (
    <ExpandHeaderBody>
      <Menu>
        <MenuGroup>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>Menu 2</MenuItem>
          <MenuItem>Menu 3</MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>Menu 4</MenuItem>
          <MenuItem>Menu 5</MenuItem>
          <MenuItem>Menu 6</MenuItem>
        </MenuGroup>
      </Menu>
    </ExpandHeaderBody>
  )
}

export default SpeacialHeader

const ExpandHeaderBody = styled.div`
  z-index: 100;
  color: white;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.div`
  display: flex;
  width: 100%;
`
const MenuGroup = styled.div`
  display: grid;
  width: 100%;
`

const MenuItem = styled.h1`
  font-weight: 600;
  padding: 20px;
  transition: 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    color: black;
  }
`
