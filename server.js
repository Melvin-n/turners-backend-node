const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const Cars = require('./models/cars')
const port = process.env.PORT | 4000

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//connection to mongo
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASSWORD}@cluster0.mzjzk.mongodb.net/turners?retryWrites=true&w=majority`)
.then(res => console.log(`Connected to DB`))
.catch(err => console.log(err))

const db = mongoose.connection


app.get('/', (req, res) => {
    return res.send('<h2>Turners API</h2>')
})



// db.collection("cars").insertMany(carObject, (err, res) => {
//     if (err) throw err
//     console.log("Number of documents inserted: " + res.insertedCount)
// })


app.post('/api/query', async (req, res) => {
    let query = req.body.query
    console.log(query)

    await db.collection('cars').find(query).toArray((err, result) => {
        if (err) throw err
        return res.send(result)
    })
    
})

app.post('/api/onload', async (req, res) => {
    let query = req.body.query
    console.log(query)

    await db.collection('cars').find(query).limit(4).toArray((err, result) => {
        if (err) throw err
        return res.send(result)
    })
    
})




app.listen(port, () => {
    console.log('Server is listening on port 4000')
})

