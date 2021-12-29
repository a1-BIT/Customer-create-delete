require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const customerRouter = require('./Route/customerRouter')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/customers', customerRouter)


app.listen(port, ()=>{
    console.log(`Listening from ${port}`);
})