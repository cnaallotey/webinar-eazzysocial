const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const router = express.Router()

const path = require('path')

const app = express()

//using cors
app.use(cors())


//configuring body parser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 3003;

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})