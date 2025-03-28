import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillItem, SkillsBox, SkillsList, SkillsListWrapper, SkillsSection, SkillsTitle } from "../styled-components/styled.components";
import { motion } from "framer-motion";

/**Portfolio-erick - version 9.13 - SkillsComponent
 *  - Features:
 * 
 *      --> Migrating 'skillIcons'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

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



