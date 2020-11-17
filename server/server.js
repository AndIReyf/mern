const express = require('express')
const mongoose = require('mongoose')
const dbURI = require('./config/config').mongoURI
const item = require('./routes/API/items')

// Init Port
const PORT = process.env.PORT || require('./config/config').PORT

// Init Server
const app = express()

// Middleware
app.use(express.json())
app.use('/api/items', item)

// Start Server
;(async () => {
    try {
        // Connect to mongoDB
        await mongoose.connect(dbURI, {
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

