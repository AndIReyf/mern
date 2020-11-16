const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/config').mongoURI

// Init Port
const PORT = process.env.PORT || require('./config/config').PORT

// Init Server
const app = express()

// Middleware
app.use(express.json())

!(async () => {
    try {
        // Connect to mongoDB
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`Server run on port:`, PORT))

    } catch (e) {
        console.log('Server error', e.message)
        // Stop all processes if something get wrong
        process.exit(1)
    }
})();

