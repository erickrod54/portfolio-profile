import { useLocation } from "wouter";
import ThreeColumnLayout from "./three.layout.component";
import styled from "styled-components";
import PrimaryButton from "../components/primary.button.component";
import WaterTitle from "../components/water.title.component";
import SectionDivider from "../components/section.divider.component";

/**Portfolio-erick - version 55.11 - FooterAllPages -
* Features:

    --> Changing 'customMargin'.    

* Notes: These component will manage the pages 
* that will be displayed at Footer sharing a 
* common layout wrapping them and a specific 
* UX design for the specic pages, the first
* two pages will be:
*
*        1.- Overview
*        2.- About
*
* they will share UX 'ThreeColumnLayout' 
**/


const FooterAllPagesWrapper = styled.div`
  margin:4rem;
  padding:4rem;
`

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%; 
  margin-bottom: 6rem; 
  margin-top:1rem;
`;

const PlaceholderDiv = styled.div`
  min-width: 50px; 
  height: 1px; 
`;


// Example Data Definition
const DummyFeaturesData = [
  {
    subtitle: 'GET STARTED',
    title: 'What level of service are you?',
    text: 'Determining what level of service you need is an important tool when planning future projects. This guide will help you plan your next steps...',
    linkText: 'Read more',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+1+Image'
  },
  {
    subtitle: 'CORE ESSENTIALS',
    title: 'Picking the right Tech Stack!',
    text: 'The nice thing about beginning a new project is that you don\'t really need any heavy frameworks. Start with small, core libraries and grow from there.',
    linkText: 'Learn more',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+2+Image'
  },
  {
    subtitle: 'WHERE THE CODE LIVES',
    title: 'Understand Your Hosting & Deployment',
    text: 'To start, secure your domain, set up your CI/CD pipeline, and choose a reliable host. A solid foundation is key to performance.',
    linkText: 'See options',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+3+Image'
  }
];

const FooterAllPages = ({children}) => {

  const current_location = useLocation()

  return (
    <FooterAllPagesWrapper>
      <TopBarWrapper>
        <PrimaryButton />
        <WaterTitle title={current_location} customSize={'65px'}/>
        <PlaceholderDiv />
      </TopBarWrapper>
      <SectionDivider customWidth={'65%'} customMargin={ '200px'} />
      {children}
    </FooterAllPagesWrapper>
  )
}

export default FooterAllPages;