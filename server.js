const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.listen(PORT, () => console.log(`Server working on Port: ${PORT}`));
