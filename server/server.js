const express = require('express')
const mongoose = require('mongoose')
const dbURI = require('./config/config').mongoURI
const item = require('./routes/API/items')
const path = require('path')

// Init Port
const PORT = process.env.PORT || require('./config/config').PORT

// Init Server
const app = express()

// Middleware
app.use(express.json())
app.use('/api/items', item)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'built', 'index.html'))
    })
}

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

