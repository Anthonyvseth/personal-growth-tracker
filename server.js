const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    )
 }
 app.use("/api", AppRouter);

app.listen(PORT, () => console.log(`Server working on Port: ${PORT}`));
