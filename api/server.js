/**Portfolio-erick - version 56.10 - server js -
* Features:

    -→> Refactoring 'allowedOrigins'

* Notes: The merge operator merge new data ( added ) with
* exisiting data ( so keep all the data instead of replacing 
* it), the trailing slash is not necessary for the browser
* cause the browser read it without it, ( in fact can cause
* the blocking of the communication between the back end and 
* front end)
**/

const express = require('express');
const https = require('https');
const fs = require('fs');
const { Pool } = require('pg');
const path = require('path');
const cors = require('cors'); // Ensure this is installed: npm install cors

// --- Configuration ---

// 1. Define the port for the API server itself
const PORT = process.env.PORT || 8080; 

// 2. Define the exact origins (protocol + domain + port) that are allowed.
// These MUST match your Vite development URL (https://localhost:3000, etc.)
const allowedOrigins = [
    'https://localhost:3000',      
    'https://192.168.1.108:3000',
    'https://100.70.7.113:3000', 
    'https://0.0.0.0:3000',         
];


// 3. Initial Dummy Data (for seeding the database)
const INITIAL_DUMMY_DATA = {
    // ... your full dummy data object ...
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

// 4. Initialize Express App
const app = express(); 

// 5. Database Connection Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// --- Middleware ---

// 6. CORS Middleware (Custom Check) - MUST be first
app.use(cors({
    origin: function (origin, callback) {
        console.log("Incoming request from origin:", origin);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`Blocked by CORS: ${origin}`); 
            callback(new Error(`CORS policy does not allow access from Origin ${origin}`), false);
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
}));


const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
}

// 7. Standard Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- API Endpoints (CRUD) ---

// All your existing, correct API endpoints (GET, PUT, POST, DELETE) go here:

// 1. GET /api/resume 
app.get('/api/resume', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT data FROM resume_data LIMIT 1');
        client.release();

        if (result.rows.length === 0) {
            return res.status(200).json({ personal: {}, summary: '', skills: {}, experience: [], education: [] });
        }
        
        res.json(result.rows[0].data);
    } catch (err) {
        console.error('Error fetching resume data:', err.message);
        res.status(500).send('Server error fetching data.');
    }
});

// 2. PUT /api/resume 
app.put('/api/resume', async (req, res) => {
    const incomingData = req.body;
    try {
        const client = await pool.connect();
        // The || operator in JSONB merges the existing data with the new data
        const query = `
            INSERT INTO resume_data (id, data) 
            VALUES (1, $1)
            ON CONFLICT (id) 
            DO UPDATE SET data = resume_data.data || $1;
        `;
        await client.query(query, [incomingData]);
        client.release();
        res.json(incomingData);
    } catch (err) {
        console.error('Error saving resume data:', err.message);
        res.status(500).send('Server error saving data.');
    }
});


// 3. POST /api/experience 
app.post('/api/experience', async (req, res) => {
    const newExperience = req.body;
    let client;
    try {
        client = await pool.connect();
        const result = await client.query('SELECT data FROM resume_data WHERE id = 1');
        if (result.rows.length === 0) {
            client.release();
            return res.status(404).send('Resume data not found. Cannot add experience.');
        }
        const currentResumeData = result.rows[0].data;
        if (!currentResumeData.experience) {
            currentResumeData.experience = []
        }
        currentResumeData.experience.push(newExperience);
        const updateQuery = `
            INSERT INTO resume_data (id,data)
            VALUES (1, $1)
            ON CONFLICT (id)
            DO UPDATE SET data = $1
            RETURNING data
        `;
        const updateResult = await client.query(updateQuery, [currentResumeData]);
        client.release();
        res.status(201).json(updateResult.rows[0].data.experience.slice(-1)[0])
    } catch (err) {
        console.error('Error adding new experience:', err.message);
        if (client) client.release()
        res.status(500).send('Server error adding experience')
    }
})

// 4. DELETE /api/experience/:index 
app.delete('/api/experience/:index', async (req, res) => {
    const indexToDelete = parseInt(req.params.index, 10);
    let client
    try {
        if (isNaN(indexToDelete) || indexToDelete < 0) {
            return res.status(400).send('Invalid index provided for deletion');
        }
        client = await pool.connect();
        const result = await client.query('SELECT data FROM resume_data WHERE id = 1');
        if (result.rows.length === 0) {
            client.release();
            return res.status(404).send('Resume data not found. Cannnot delete experience')
        }
        const currentResumeData = result.rows[0].data;
        const experience = currentResumeData.experience || [];
        if (indexToDelete >= experience.length) {
            client.release();
            return res.status(404).send('Experience index out of bounds');
        }
        experience.splice(indexToDelete, 1);
        const updateQuery = `
            INSERT INTO resume_data (id, data)
            VALUES (1, $1)
            ON CONFLICT (id)
            DO UPDATE SET data = $1
            RETURNING data
        `;
        await client.query(updateQuery, [currentResumeData]);
        client.release();
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting experience', err.message);
        if (client) client.release();
        res.status(500).send('Server error deleting experience')
    }
})


// --- Server Initialization Logic ---

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

            // 2. Check if data exists and seed if empty
            const checkDataQuery = 'SELECT COUNT(*) FROM resume_data';
            const { rows } = await client.query(checkDataQuery);
            
            if (rows[0].count === '0') {
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


// Start the database setup and then the server
setupDatabase().then(() => {
    https.createServer(sslOptions,app).listen(PORT, () => {
        console.log(`Secure Node API listening on https://localhost:${PORT}`);
    });
});