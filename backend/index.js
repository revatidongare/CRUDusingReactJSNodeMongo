const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coderbee:8108@Reva@cluster0.lboes.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology:true })

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api', require('./routes/index'))

app.listen(4000, () => {
    console.log('listening on app 4000');
    });
