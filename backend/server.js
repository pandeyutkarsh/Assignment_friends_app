const express = require('express');
require('./Models/db');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/authRouter');

const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).json({
        status:"Success",
        message:"Welcome"
    })
})

app.use('/auth',authRouter);

app.listen(3000,()=>{
    console.log('Server is started on port 3000');
})