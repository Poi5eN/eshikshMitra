const express = require('express')
const cookieParser = require('cookie-parser')
const routes = require('./routes/route')
const cors = require("cors");
const app = express()


app.use(express.json())
const corsOptions = {
    origin:['https://eshikshamitra.in', 'http://localhost:3000'],

    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

    // origin: 'http://localhost:3000',
    credentials: true, // Include cookies and authentication headers
  };

app.use(cors(corsOptions));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All route is working fine"
  })
})

app.use('/api/v1',routes)

module.exports = app