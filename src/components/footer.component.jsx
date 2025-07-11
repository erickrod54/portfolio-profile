import styled from 'styled-components';

/** Portfolio-erick - version 33.15 - Footer 
 * Features:
 * 
 *   --> Placing 'resources_title' field.
 * 
 * Note: This component is the base component for a 
 * generic SVG icon component
 */

// Styled Components
const FooterWrapper = styled.footer`
  color: #ffffff; /* Dark text color */
  padding: 4rem 2rem; /* Adjusted padding for better spacing */
  font-family: Arial, sans-serif;
  border-top: 1px solid #e0e0e0; /* Subtle top border */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 2rem; /* Space between columns */
  margin-bottom: 3rem; /* Space between top and bottom sections */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const BrandInfo = styled.div`
  flex-basis: 25%; /* Take up about a quarter of the space */
  min-width: 200px; /* Minimum width to prevent content from shrinking too much */

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #B197FC; /* Placeholder for your logo icon */
  mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 400l85.7-208.2c17-41.3 47.8-75.3 87.2-96.3L383.8 17.2c12.3-6.6 26.5 4.7 23 18.2L369.6 177.8c-1.1 4.1-1.6 8.3-1.6 12.6 0 6.3 1.2 12.6 3.6 18.5l76.4 191.1-207.1 0 11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 260.4 230.9 256 224 256s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 323 144 329.1 144 336s4.4 13 10.9 15.2l40.4 13.5 11.8 35.4-143.1 0zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'); /* Replaced with a generic placeholder SVG */
  mask-repeat: no-repeat;
  mask-size: contain;
  margin-right: 0.5rem;
`;

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
              <li><a href="#help">Docs</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>Social</h4>
            <ul>
              <li><a href="#twitter">X</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </NavColumn>
        </NavColumns>
      </TopSection>

      <BottomSection>
        <Copyright>&copy; 2025 erick54.dev All rights reserved.</Copyright>
        <PolicyLinks>
          <a href="#terms">Terms and Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </PolicyLinks>
      </BottomSection>
    </FooterWrapper>
  );
};

export default Footer;

