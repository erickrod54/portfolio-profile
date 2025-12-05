import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import SkillsSection from './skills.component';
import ExperienceSection from './experience.component';
import EducationSection from './education.component';

/**Portfolio-erick - version 56.04 - ResumePDF
 *  - Features:
 * 
 *      --> Building 'ResumePDF'.
 * 
 * Notes: This is the first test for context static 
 * data
 */

// Register a font for non-standard PDF fonts (optional, but good practice)
// You can use a system font like Helvetica for simplicity if you don't need custom fonts.
Font.register({ family: 'Roboto', src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZouyY.ttf' });

// 💥 1. Define Stylesheet: React-PDF requires its own styling method
export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica', // Use a standard font for reliability
  },
  header: {
    marginBottom: 20,
    borderBottom: '2pt solid #000000',
    paddingBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8
  },
  // Style for the main sections (Experience, Skills, etc.)
  sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 7,
      borderBottom: '1pt solid #444444',
  },
    // New styles for the Skills Section
  skillsContainer: {
    // Allows categories to flow side-by-side
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  skillCategory: {
    width: '50%', // Each category takes half the width (e.g., two columns)
    paddingRight: 15,
    marginBottom: 5,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  skillList: {
    fontSize: 10,
    lineHeight: 1.4,
  },
    experienceEntry: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    // Allow title to wrap if location/dates are short
    maxWidth: '70%',
    marginBottom:6
  },
  companyDates: {
    fontSize: 10,
    fontWeight: 500,
    color: '#333333',
  },
  achievementBullet: {
    fontSize: 10,
    marginLeft: 10, // Indent the bullet points
    lineHeight: 1.4,
  },
  bulletText: {
    // Uses the bullet style to create the text line
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 0,
  },
    educationEntry: {
    marginBottom: 5,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  institution: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  degreeDates: {
    fontSize: 10,
    color: '#333333',
    fontWeight: 500,
  },
});



// 💥 2. The Main PDF Document Component
const ResumePDF = ( { data } ) => {

 if (!data || !data.personal) {
    return null; 
  }
  
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        
        {/* 3. HEADER SECTION (Contact Info) */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.name}</Text>
          <Text style={styles.title}>{data.personal.title}</Text>
          
          <View style={styles.contactRow}>
            <Text>{data.personal.email}</Text>
            <Text>{data.personal.phone}</Text>
            <Text>{data.personal.location}</Text>
            <Text>{data.personal.linkedin}</Text>
            <Text>{data.personal.github}</Text>
          </View>
        </View>
        
        {/* 4. SUMMARY SECTION */}
        <View>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={{ fontSize: 10, lineHeight: 1.5 }}>{data.summary}</Text>
        </View>

        <SkillsSection skills={data.skills}/>
        
        <ExperienceSection experience={data.experience}/>
        
        <EducationSection education={data.education}/>
        
      </Page>
    </Document>
  )
};

export default ResumePDF;
