import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './resume.component';
import React from 'react';

/**Portfolio-erick - version 56.04 - ExperienceSection
 *  - Features:
 * 
 *      --> Adding 'ExperienceSection'.
 * 
 * Notes: This is the first test for context static 
 * data
 */

// Component for a single bullet point (Achievement)
const BulletPoint = ({ text }) => (
    <View style={{ flexDirection: 'row', marginBottom: 2 }}>
        <Text style={styles.achievementBullet}>•</Text>
        <Text style={styles.bulletText}>{text}</Text>
    </View>
);

const ExperienceSection = ({ experience }) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            
            {experience.map((job, index) => (
                <View key={index} style={styles.experienceEntry}>
                    
                    {/* Job Title, Company, Dates & Location Header */}
                    <View style={styles.jobHeader}>
                        <Text style={styles.jobTitle}>
                            {job.title} at {job.company}
                        </Text>
                        <Text style={styles.companyDates}>
                            {job.location} | {job.dates}
                        </Text>
                    </View>
                    
                    {/* List of Achievements (Bullet Points) */}
                    <View>
                        {job.achievements.map((achievement, i) => (
                            <BulletPoint key={i} text={achievement} />
                        ))}
                    </View>

                    {/* Optional: Add Stakeholder/Contact Info */}
                    {job.stakeholder && (
                        <Text style={{ fontSize: 10, color: '#555555', marginTop: 16 }}>
                            Stakeholder: {job.stakeholder}
                        </Text>
                    )}
                </View>
            ))}
        </View>
    );
};

export default ExperienceSection;
