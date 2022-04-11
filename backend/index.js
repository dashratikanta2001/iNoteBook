const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('welcome to my new app')
})

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})