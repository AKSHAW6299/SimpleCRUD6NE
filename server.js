import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './db.js'
import userRoutes from './routes/users.js'


const app = express()
// To access PORT from [.env] file!
const PORT = process.env.PORT || 5000

// Middleware to parse JSON
app.use(express.json());  // <--- Use this here

// Call DB connection
connectToDB()

// Route handler
app.get('/', (req, resp) => {
    console.log('I am inside home page route handler.');
    resp.send('Hello Anand, Welcome to api development!')
})

// using our router here
// Mount user routes at /api
app.use('/api', userRoutes);  // e.g., GET /api/users



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}...`);
})