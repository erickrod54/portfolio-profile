import styled from 'styled-components';
import { getCurrentYear } from '../utils/utils.index';
import { FooterWrapper, TopSection, BrandInfo, Logo, LogoIcon } from '../styled-components/styled.components.index';

/** Portfolio-erick - version 34.12 - Footer 
 * Features:
 * 
 *   --> Migrating 'Logo' 
 * 
 * Note: This component is the base component for a 
 * generic SVG icon component
 */

const Tagline = styled.p`
  font-size: 0.9rem;
  color: #B197FC;
  line-height: 1.5;
`;

const NavColumns = styled.div`
  display: flex;
  flex-grow: 1; /* Allow columns to grow and take remaining space */
  justify-content: space-around; /* Distribute columns evenly */
  gap: 1rem; /* Space between columns */

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavColumn = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #F5F5F5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #CCF5FF;
    font-size: 0.9rem;
    &:hover {
      color: #007bff; /* Example hover color */
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: #666666;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 1.5rem;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const PolicyLinks = styled.div`
  a {
    color: #CCF5FF;
    text-decoration: none;
    margin-left: 1.5rem;
    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      margin: 0 0.5rem;
      display: inline-block;
    }
  }
`;

const BrandInfoData = [
  {
    brandfield:'@erickdev'
  },
  {
    brandfield:'Components + AI for the new Tech Era'
  } 
]

const AI_AND_Classic_Eng = [
  {
    title:'AI & Classic Engineering Program'
  },
  {
    item:'Overview'
  },
  {
    item:'Pricing'
  },
  {
    item:'Marketplace'
  },
  {
    item:'Features'
  },
  {
    item:'Integrations'
  }  
]

const MenthorshipProgram = [
  {
    title:'Menthorship Program'
  },
  {
    item:'About'
  },
  {
    item:'Team'
  },
  {
    item:'Blog'
  },
  {
    item:'Careers'
  },
  {
    item:'Privacy'
  }
]

const ResourcesData = [
  {
    title:'Resources'
  },
  {
    item:'Docs'
  }
]

const SocialFooterData = [
  {
    title:'Social'
  },
  {
    item:'X'
  },
  {
    item:'LinkedIn'
  }

]

const BottomData = [
  {
    title:'erick54.dev All rights reserved'  
  },
  {
    item:'Terms and Conditions'  
  },
  {
    item:'Privacy Policy'  
  }

]

// Footer Component
const Footer = () => {

  const [{ brandfield: brandname }, { brandfield: brand_slogan}] = BrandInfoData;

  const [{ title: program_title },
          {item: first_item },
          { item: second_item },
          { item: third_item },
          { item: fourth_item },
          { item: fifth_item }] = AI_AND_Classic_Eng;

  const [ 
    {title: menthorship_title },
    {item:m_first_item},
    {item:m_second_item},
    {item:m_third_item},
    {item:m_fourth_item},
    {item:m_fifth_item} 
    ] = MenthorshipProgram;

    const [
      {title: resources_title},
      {item: r_first_item}
    ] = ResourcesData;

    const [
      {title: social_title },{s_first_item},{s_second_item}
    ] = SocialFooterData;

    const [
      { title: copyright}, { item:conditions}, { item:privacy}
    ] = BottomData;

  return (
    <FooterWrapper>
      <TopSection>
        <BrandInfo>
          <Logo>
            <LogoIcon />
            {brandname}
          </Logo>
          <Tagline>{brand_slogan}</Tagline>
        </BrandInfo>

        <NavColumns>
          <NavColumn>
            <h4>{program_title}</h4>
            <ul>
              <li><a href="#overview">{first_item}</a></li>
              <li><a href="#pricing">{second_item}</a></li>
              <li><a href="#marketplace">{third_item}</a></li>
              <li><a href="#features">{fourth_item}</a></li>
              <li><a href="#integrations">{fifth_item}</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>{menthorship_title}</h4>
            <ul>
              <li><a href="#about">{m_first_item}</a></li>
              <li><a href="#team">{m_second_item}</a></li>
              <li><a href="#blog">{m_third_item}</a></li>
              <li><a href="#careers">{m_fourth_item}</a></li>
              <li><a href="#privacy">{m_fifth_item}</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>{resources_title}</h4>
            <ul>
              <li><a href="#help">{r_first_item}</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>{social_title}</h4>
            <ul>
              <li><a href="#twitter">{s_first_item}</a></li>
              <li><a href="#linkedin">{s_second_item}</a></li>
            </ul>
          </NavColumn>
        </NavColumns>
      </TopSection>

      <BottomSection>
        <Copyright>&copy; {getCurrentYear()} {copyright} </Copyright>
        <PolicyLinks>
          <a href="#terms">{conditions}</a>
          <a href="#privacy">{privacy}</a>
        </PolicyLinks>
      </BottomSection>
    </FooterWrapper>
  );
};

export default Footer;

