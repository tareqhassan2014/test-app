const express = require('express')
require('dotenv/config')

const app = express()

app.get('/' , (req, res) => {
    res.json({message: 'hello world'})
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on ${port}`))