import { getCurrentYear } from '../utils/utils.index';
import { FooterWrapper, TopSection,
         BrandInfo,
         Logo,
         LogoIcon,
         Tagline,
         Copyright,
         PolicyLinks,
         NavColumns, NavColumn, BottomSection } from '../styled-components/styled.components.index';
import { usePortfolioContext } from '../context';

/** Portfolio-erick - version 47.17 - Footer 
 * Features:
 * 
 *   --> Removing first '#' from third program titles  
 * 
 * Note: This component is the base component for a 
 * generic SVG icon component
 */

// Footer Component
const Footer = () => {

  const { BrandInfoData,
          AI_AND_Classic_Eng,
          ResourcesData,
          SocialFooterData,
          BottomData,
          MenthorshipProgram } = usePortfolioContext()

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
      {title: social_title },{item:s_first_item},{item:s_second_item}
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
              <li><a href="overview">{first_item}</a></li>
              <li><a href="pricing">{second_item}</a></li>
              <li><a href="marketplace">{third_item}</a></li>
              <li><a href="features">{fourth_item}</a></li>
              <li><a href="integrations">{fifth_item}</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>{menthorship_title}</h4>
            <ul>
              <li><a href="about">{m_first_item}</a></li>
              <li><a href="team">{m_second_item}</a></li>
              <li><a href="blog">{m_third_item}</a></li>
              <li><a href="careers">{m_fourth_item}</a></li>
              <li><a href="privacy">{m_fifth_item}</a></li>
            </ul>
          </NavColumn>

          <NavColumn>
            <h4>{resources_title}</h4>
            <ul>
              <li><a href="help">{r_first_item}</a></li>
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

