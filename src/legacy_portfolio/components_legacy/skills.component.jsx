import { usePortfolioContext } from "../context";
import { SkillItem, SkillsList, SkillsListWrapper } from "../styled-components/styled.components";
import { motion } from "framer-motion";
import { styled } from 'styled-components';

/**Portfolio-erick - version 16.16 - SkillsComponent
 *  - Features:
 * 
 *      --> Clearing 'SkillsTitle' 
 * 
 * Notes: Styled components and logic will be placed 
 * in one place
 */


const SkillsSection = styled.section`
    display: grid;
    grid-column: container-start / container-end;
    place-content: center;
    background: var(--gradient-bkgd);
    margin: 4rem;
    border-radius: 4rem;
`;

const SkillsBox = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 1.7em;
  border-radius: 0.75em;
  justify-content: center;
  align-items: center;
  text-align: center;
`; 

const SkillsTitle = styled.h2`
  display: grid;
  margin: 1rem;
  padding: 1rem;
  text-decoration: underline yellow;
  place-items: center;
  text-transform: capitalize;
  color: var(--clr-white);
`;

const SkillsComponent = () => {



  const { ResumeData, skillIcons } = usePortfolioContext();
 
  // Extract the skills array from the second object in ResumeData
  const { skills = [] } = ResumeData.find(item => item.skills) || {};

  return (
    <SkillsSection>
      <SkillsBox>
        <SkillsTitle>My skills and growing:</SkillsTitle>
            <SkillsListWrapper style={{ padding: "0 2rem" }}> 
              {/* Added padding to avoid screen edges */}
              
              {/* Continuous Scrolling Animation */}
              <motion.div 
                className="skills-carousel"
                style={{ 
                  display: "flex", 
                  flexWrap: "nowrap", 
                  width: "100%", // Ensure it does not exceed the container
                  margin: "0 auto",  
                  padding: "2rem 0", // Adjust padding for proper spacing
                  overflowX: "hidden", // Prevents horizontal overflow
                }} 
                animate={{ x: ["0%", "-20%"] }} // Moves left infinitely
                transition={{
                  repeat: Infinity, 
                  ease: "linear",
                  duration: 20 // Adjust speed
                }}
              >
                <SkillsList style={{ margin: "8rem" }}>
                  {skills.concat(skills).map((skill, index) => { 
                    const { skillname } = skill;
                    const { icon, color } = skillIcons[skillname] || {}; // Get icon & color

                    return (
                      <SkillItem 
                        key={`${skillname}-${index}`} // Ensure a unique key 
                        className="skills--li-bkg"
                        style={{ margin: "0 2em" }} // Adds left and right margin
                      >
                        <p>
                          {'{ }'}   
                          <span 
                            className="icon" 
                            style={{ color, fontSize: "4rem", marginLeft: "8px" }}
                          >
                            {icon || "❓"} {/* Show a fallback icon if missing */}  
                          </span>
                        </p>
                      </SkillItem>
                    );
                  })}
                </SkillsList>
              </motion.div>
            </SkillsListWrapper>
          );
    
      </SkillsBox>
    </SkillsSection>
  );
};

export default SkillsComponent;



