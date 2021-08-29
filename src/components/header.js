import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import SpeacialHeader from "./Header/SpeacialHeader"
import { useSwitch } from "../hooks/useSwitch"

const Header = ({ siteTitle }) => {
  const { isOpen, open, close } = useSwitch()
  const [disabled, setDisabled] = React.useState(false)
  const handleClick = () => {
    setDisabled(true)
    if (isOpen === false) {
      open()
    } else {
      close()
    }
    setTimeout(() => setDisabled(false), 1000)
  }

  console.log(isOpen)
  return (
    <>
      <BgHeader />
      <RowHeader>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
        <Menu onClick={handleClick} disabled={disabled}>
          M
        </Menu>
      </RowHeader>
      <SpeacialHeader isOpen={isOpen} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const BgHeader = styled.div`
  position: absolute;
  left: 0;
  background-color: black;
  width: 100vw;
  height: 56px;
  z-index: -1;
`

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  padding: 20px;
  a {
    color: white;
    font-weight: 600;
  }
`
const Menu = styled.button`
  border: none;
  background: transparent;
  padding: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 3000ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: red;
    box-shadow: 5px 6px 36px 2px rgba(255, 0, 0, 0.2);
    -webkit-box-shadow: 5px 6px 36px 2px rgba(255, 0, 0, 0.2);
    -moz-box-shadow: 5px 6px 36px 2px rgba(255, 0, 0, 0.2);
  }
`
