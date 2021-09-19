import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import styled from "styled-components"
import ResourcesCard from "../Cards/ResourcesCard"

SwiperCore.use([Navigation])

const Resources = ({ resources }) => {
  console.log("Resources", resources)
  return (
    <Section>
      <Wrapper>
        <BigTitle>
          <Title>Resources</Title>
          <SectionDescription>
            Website/App that I find it useful for designer and developer.🍻
          </SectionDescription>
        </BigTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1620: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            970: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            710: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {resources.nodes.reverse().map(data => (
            <SwiperSlide>
              <ResourcesCard
                key={data.originalId}
                data={data}
                color="#EBE4E4"
                bg="#0d1821"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Section>
  )
}

export default Resources

const Section = styled.section`
  background: #0d1821;
  color: #ebe4e4;
  padding: 15px;
`
const Wrapper = styled.div`
  .swiper-button-prev {
    opacity: 0.2;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: white;
    &:hover {
      opacity: 1;
    }
  }

  .swiper-button-next {
    opacity: 0.2;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: white;
    &:hover {
      opacity: 1;
    }
  }
`

const BigTitle = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  word-break: break-all;
`
const Title = styled.h1`
  font-size: 110pt;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 64pt;
  }
`
const SectionDescription = styled.p`
  padding: 20px 10px;
  max-width: 800px;
  line-height: 140%;

  a {
    text-decoration: underline;
    color: yellow;
    font-weight: bold;
  }
`
