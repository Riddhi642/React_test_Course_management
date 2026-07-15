const express = require('express');
const express = require('express');
const { connectDB } = require('./db');
const routes = require('./router/courseRoute');
const cors = require('cors');

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route (Cannot GET / fix)
app.get("/", (req, res) => {
    res.send("Course Management Backend is running");
});

// Course Routes
app.use('/course', routes);


// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});