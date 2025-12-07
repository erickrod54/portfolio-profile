const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

//api/server js is where the back end operations logic is defined
//as get, put, post, delete ( CRUD operations )

// api/server.js (Add this near the top)
// ----------------------------------------------------
const INITIAL_DUMMY_DATA = {
    personal: { 
        name: "Erick Rodriguez", 
        title: "Senior Full Stack Developer", 
        email: "erick@example.com", 
        phone: "555-123-4567",
        location: "Your City, State",
        linkedin: "linkedin.com/in/erick",
        github: "github.com/erickdev",
    },
    summary: "Highly skilled software developer with 5+ years of experience in JavaScript frameworks and full-stack architecture. Passionate about clean code and robust, scalable solutions.",
    skills: { 
        Languages: ["JavaScript (ES6+)", "TypeScript", "Python"],
        Frameworks: ["React", "Next.js", "Express.js"],
        Databases: ["PostgreSQL", "MongoDB"],
    },
    experience: [
        { title: "Lead Developer", company: "TechCorp", dates: "2022-Present", location: "Remote", achievements: ["Led migration of legacy system.", "Mentored junior team members."] }
    ],
    education: [
        { institution: "University of Tech", degree: "B.S. Computer Science", dates: "2015-2019", location: "Campus, CA" }
    ]
};

const app = express();

// --- Middleware ---
app.use(cors()); // Enable CORS for your React frontend
app.use(express.json()); // Enable parsing JSON bodies

// --- Database Connection Pool ---
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, // 'db' from docker-compose.yml
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// --- API Endpoints ---

// 1. GET /api/resume (TanStack Query fetch)
app.get('/api/resume', async (req, res) => {
    try {
        const client = await pool.connect();
        // SELECT the single row of resume data
        const result = await client.query('SELECT data FROM resume_data LIMIT 1');
        client.release();

        if (result.rows.length === 0) {
            // If the table is empty, return an empty/default structure
            return res.status(200).json({ personal: {}, summary: '', skills: {}, experience: [], education: [] });
        }
        
        // Data is stored as JSONB in the database
        res.json(result.rows[0].data);
    } catch (err) {
        console.error('Error fetching resume data:', err.message);
        res.status(500).send('Server error fetching data.');
    }
});


// 2. PUT /api/resume (TanStack Query mutation)
app.put('/api/resume', async (req, res) => {
    const resumeData = req.body;
    try {
        const client = await pool.connect();
        
        // This query inserts the data or updates the existing row (Upsert logic).
        // It relies on having a single row with a fixed ID (e.g., 1) or using a custom table structure.
        const query = `
            INSERT INTO resume_data (id, data) 
            VALUES (1, $1)
            ON CONFLICT (id) 
            DO UPDATE SET data = $1;
        `;
        
        await client.query(query, [resumeData]);
        client.release();
        
        res.json(resumeData);
    } catch (err) {
        console.error('Error saving resume data:', err.message);
        res.status(500).send('Server error saving data.');
    }
});

app.post('/api/experience', async (req, res) => {
    /**the request body should contain the new experience 
     * object e.g title: 'New Job', company: "ABC" */

    const newExperience = req.body;
    let client;

    try {
        client = await pool.connect();

        // fetch the current resume data from the data base
        const result = await client.query('SELECT data FROM resume_data WHERE id = 1');

        if (result.rows.length === 0) {
            client.release();
            return res.status(404).send('Resume data not found. Cannot add experience.');
        }

        const currentResumeData = result.rows[0].data;

        //Modify the data: Add the new experience to the array
        if (!currentResumeData.experience) {
            currentResumeData.experience = [] //ensure exists
        }
        // Assign a temporary ID if necessary for the Front End, though using array index is simpler for now
        currentResumeData.experience.push(newExperience);

        //save the entire object back into the db
        const updateQuery = `
            INSERT INTO resume_data (id,data)
            VALUES (1, $1)
            ON CONFLICT (id)
            DO UPDATE SET data = $1
            RETURNING data
        `;

        const updateResult = await client.query(updateQuery, [currentResumeData]);

        client.release();

        //return the newly added item or the entire updated data

        res.status(201).json(updateResult.rows[0].data.experience.slice(-1)[0])
    } catch (err) {
        console.error('Error adding new experience:', err.message);
        if (client) client.release()
        res.status(500).send('Server error adding experience')
    }
})

app.delete('/api/experience/:index', async (req, res) => {
    //get the index from the url and convert it to integer
    const indexToDelete = parseInt(req.params.index, 10);
    let client

    try {
        // --- input validation
        // Ensure the index is a non-negative number
        if (isNaN(indexToDelete) || indexToDelete < 0) {
            return res.status(400).send('Invalid index provided for deletion');
        }

        client = await pool.connect();

        //fetch the resume data
        const result = await client.query('SELECT data FROM resume_data WHERE id = 1');

        if (result.rows.length === 0) {
            client.release();
            return res.status(404).send('Resume data not found. Cannnot delete experience')
        }

        const currentResumeData = result.rows[0].data;
        const experience = currentResumeData.experience || [];

        //Modify the data: Check and delete the item
        if (indexToDelete >= experience.length) {
            client.release();
            return res.status(404).send('Experience index out of bounds');
        }

        //Remove the item at the specified index
        experience.splice(indexToDelete, 1);

        //save the entire updated resume object back
        const updateQuery = `
            INSERT INTO resume_data (id, data)
            VALUES (1, $1)
            ON CONFLICT (id)
            DO UPDATE SET data = $1
            RETURNING data
        `;

        await client.query(updateQuery, [currentResumeData]);

        client.release();

        //Respond with 204 No Content for a sucessful deletion
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting experience', err.message);
        if (client) client.release();
        res.status(500).send('Server error deleting experience')
    }
})

// --- Server Initialization ---
const PORT = process.env.PORT || 8080;

// Function to ensure the table exists on startup with retries
// api/server.js (Updated setupDatabase function)

// Function to ensure the table exists and contains initial data
async function setupDatabase(retries = 5) {
    let client;
    while (retries > 0) {
        try {
            console.log(`Attempting to connect to database... (Retries left: ${retries})`);
            client = await pool.connect();
            console.log('Database connected!');
            
            // 1. Ensure Table Exists
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS resume_data (
                    id INTEGER PRIMARY KEY,
                    data JSONB
                );
            `;
            await client.query(createTableQuery);
            console.log('Table resume_data ensured.');

            // 2. Check if data exists
            const checkDataQuery = 'SELECT COUNT(*) FROM resume_data';
            const { rows } = await client.query(checkDataQuery);
            
            if (rows[0].count === '0') {
                // 3. SEED DATA if table is empty
                console.log('Database is empty. Inserting initial dummy data...');
                const seedQuery = `
                    INSERT INTO resume_data (id, data) 
                    VALUES (1, $1);
                `;
                await client.query(seedQuery, [INITIAL_DUMMY_DATA]);
                console.log('Dummy data inserted successfully.');
            } else {
                console.log('Data found. Skipping seed.');
            }

            client.release();
            return; // Success! Exit the function.

        } catch (err) {
            retries -= 1;
            console.error(`Failed to connect to database. Retrying in 5 seconds... Error: ${err.message}`);
            
            if (client) client.release();

            if (retries === 0) {
                console.error('Max connection retries reached. Exiting.');
                process.exit(1);
            }
            await new Promise(resolve => setTimeout(resolve, 5000)); 
        }
    }
}




setupDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Node API listening on http://localhost:${PORT}`);
    });
});