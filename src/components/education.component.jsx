import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './resume.component';
import React from 'react';

/**Portfolio-erick - version 56.04 - EducationSection
 *  - Features:
 * 
 *      --> Building 'EducationSection'.
 * 
 * Notes: This is the first test for context static 
 * data
 */

const EducationSection = ({ education }) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Education</Text>
            
            {education.map((item, index) => (
                <View key={index} style={styles.educationEntry}>
                    
                    {/* Institution, Dates & Location Header */}
                    <View style={styles.educationHeader}>
                        <Text style={styles.institution}>
                            {item.institution}
                        </Text>
                        <Text style={styles.degreeDates}>
                            {item.location} | {item.dates}
                        </Text>
                    </View>
                    
                    {/* Degree and Major */}
                    <Text style={{ fontSize: 10, color: '#555555' }}>
                        {item.degree}
                    </Text>
                    
                </View>
            ))}
        </View>
    );
};

export default EducationSection;
