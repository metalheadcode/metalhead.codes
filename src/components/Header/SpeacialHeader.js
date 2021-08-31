import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import gsap from "gsap"

const SpeacialHeader = ({ isOpen }) => {
  const expandMenuRef = useRef(null)
  const [expandContact, setExpandContact] = useState(false)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      // close the menu]
      staggerRevealClose(line1.current, line2.current, line3.current)
      gsap.to(expandMenuRef.current, { duration: 1, css: { display: "none" } })
    } else if (isOpen) {
      gsap.to(expandMenuRef.current, {
        duration: 1,
        css: { display: "block" },
      })
      staggerAnimation(line1.current, line2.current, line3.current)
    }
  }, [isOpen])

  const staggerAnimation = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 60,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    })
  }

  // CLOSE MENU
  const staggerRevealClose = (node1, node2, node3) => {
    gsap.to([node1, node2, node3], {
      duration: 0.8,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.07,
      },
    })
  }

  const handleExpand = () => {
    setExpandContact(!expandContact)
  }

  return (
    <ExpandHeaderBody>
      <Wrapper ref={expandMenuRef}>
        <MenuGroup>
          <MenuItemBig href="/portfolio">
            <h1 ref={line1} className="text">
              Portfolio
            </h1>
          </MenuItemBig>
          <MenuItemBig
            href="https://www.linkedin.com/in/ahmad-hazim-ahmad-fuad-40702617/"
            target="_blank"
          >
            <h1 ref={line2} className="text">
              LinkedIn
            </h1>
          </MenuItemBig>
          <MenuItemBig href="/contact-me">
            <h1 ref={line3} className="text">
              Past Experience
            </h1>
          </MenuItemBig>
        </MenuGroup>
        <MenuGroup>
          <MenuItemSmall onClick={handleExpand}>
            <p className="title">Contact Me</p>
            <p className="description">
              You could reach me at Twitter or maybe you can direct text me thru
              whatsapp. Click for more info.
            </p>
          </MenuItemSmall>
          {expandContact && (
            <MenuItemSmall
              href="https://twitter.com/MetalPolymath"
              target="_blank"
              className="twitter"
            >
              <p className="title ">Twitter</p>
              <p className="description">*Do not DM, if not related to work.</p>
            </MenuItemSmall>
          )}
          {expandContact && (
            <MenuItemSmall
              href="https://wa.me/60168532998?text=From%20your%20website,%20interested%20working%20a%20project%20with%20you."
              target="_blank"
              className="whatsapp"
            >
              <p className="title ">WhatsApp</p>
              <p className="description">
                *Do not text me, if not related to work.
              </p>
            </MenuItemSmall>
          )}

          <MenuItemSmall>
            <p className="title">Let's Collabrate</p>
            <p className="description">
              Say you are BE dev, and wanted front-end dev that focus on design,
              I'd really glad to collab. Click here, direact whatsapp me. But no
              PHP please 😂. Express (MonggoDB), Django or maybe Firebase highly
              welcome.
            </p>
          </MenuItemSmall>
        </MenuGroup>
        <Small>
          All design and codes inside https://metalhead.codes are belong to
          metalheadcodes® or Ahmad Hazim. If you face any issues feel free to
          email me at metalheadcoder@gmail.com
        </Small>
      </Wrapper>
    </ExpandHeaderBody>
  )
}

export default SpeacialHeader

const ExpandHeaderBody = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  background-color: black;
`

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  max-width: 1028px;
  margin: auto;
`

const MenuGroup = styled.div`
  display: grid;
  width: 100%;

  .twitter {
    background-color: #1da1f2;
  }
  .whatsapp {
    background-color: #25d366;
  }
`

const MenuItemBig = styled.a`
  cursor: pointer;
  overflow: hidden;
  height: 112px;
  .text {
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px; /* 1px Stroke */
    font-weight: 600;
    font-size: 72px;
    padding: 20px;
    transition: 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      -webkit-text-fill-color: white;
      text-align: center;
    }
  }
`

const MenuItemSmall = styled.a`
  padding: 20px;
  transition: 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  .title {
    font-weight: 600;
  }

  .description {
    margin-top: 15px;
    font-weight: 300;
    line-height: 140%;
  }

  &:hover {
    color: black;
    background: rgba(255, 255, 255, 0.7);
  }
`

const Small = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 6px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`
