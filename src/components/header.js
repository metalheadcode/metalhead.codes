import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import SpeacialHeader from "./Header/SpeacialHeader"
import { useSwitch } from "../hooks/useSwitch"
// import { useTheme } from "../context/theme.context"

const Header = ({ siteTitle }) => {
  const { isOpen, open, close } = useSwitch()
  const [disabled, setDisabled] = React.useState(false)
  // const [dark, setDark] = useTheme()

  const handleClick = () => {
    setDisabled(true)
    if (isOpen === false) {
      open()
    } else {
      close()
    }
    setTimeout(() => setDisabled(false), 1000)
  }

  // const handleTheme = () => {
  //   setDark(!dark)
  // }

  return (
    <>
      <Navbar>
        <Wrapper>
          <Logo>
            <Link to="/">{siteTitle}</Link>
          </Logo>
          <Menu onClick={handleClick} disabled={disabled}>
            M
          </Menu>
          {/* <Menu onClick={handleTheme} disabled={disabled}>
            Change Theme
          </Menu> */}
        </Wrapper>
      </Navbar>
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

const Navbar = styled.header`
  position: relative;
  z-index: 4;
  background: black;
`

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
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
