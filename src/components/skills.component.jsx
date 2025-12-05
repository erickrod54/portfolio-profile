import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './resume.component';
import React from 'react';

/**Portfolio-erick - version 56.04 - SkillsSection js
 *  - Features:
 * 
 *      --> Building 'SkillsSection'.
 * 
 * Notes: This is the first test for context static 
 * data
 */

const SkillsSection = ({ skills }) => {

  const skillEntries = Object.entries(skills);

  return (
    <View>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      
      <View style={styles.skillsContainer}>
        {skillEntries.map(([category, skillsArray]) => (
          <View key={category} style={styles.skillCategory}>
            
            {/* Title: Languages, Frameworks, etc. */}
            <Text style={styles.skillCategoryTitle}>
              {category.replace('_', ' ')}: {/* Converts 'soft_skills' to 'soft skills' */}
            </Text>
            
            {/* List of skills, joined by commas */}
            <Text style={styles.skillList}>
              {skillsArray.join(', ')}
            </Text>
            
          </View>
        ))}
      </View>
    </View>
  );
};

export default SkillsSection;
