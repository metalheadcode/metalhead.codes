import React from "react"
import styled from "styled-components"
import CaseCard from "../Cards/CaseCard"

const dummyData = [
  {
    id: 1,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.facebook.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 2,
    designer: "Nor Ummairah",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 3,
    designer: "Ahmad Syazwan",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 4,
    designer: "Anas Nazmi",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 5,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 6,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 7,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 8,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 9,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 10,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 11,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 12,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 13,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 14,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
  {
    id: 15,
    designer: "Ahmad Hazim",
    year: 2021,
    location: "German",
    link: "www.sdasdasdad.asdas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit fugiat magni quibusdam tempora quo et doloribus culpa iusto ex ipsum reprehenderit perferendis repellendus dolores odio debitis dolorem soluta corporis sequi hic, suscipit corrupti. Consequatur esse aliquam reprehenderit nobis pariatur adipisci, harum tenetur molestias saepe fugiat voluptatum nulla ex temporibus.",
  },
]

const CaseStudies = () => {
  return (
    <Section>
      <Wrapper>
        <BigTitle>Case Studies</BigTitle>
        <CardGrid>
          {dummyData.map(data => (
            <CaseCard key={data.id} data={data} />
          ))}
        </CardGrid>
      </Wrapper>
    </Section>
  )
}

export default CaseStudies

const Section = styled.section`
  background: black;
  padding: 15px;
  min-height: 100vh;
`
const Wrapper = styled.div``

const BigTitle = styled.h1`
  color: white;
  font-size: 110pt;
  font-weight: 700;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 500px) {
    font-size: 64pt;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 15px;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 710px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
