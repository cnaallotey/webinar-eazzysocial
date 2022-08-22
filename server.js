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

const request = require('request');

var webinar=[];

const token = "91a8c488313407496f7ff17ff4d1b482596471843b7d95807a20aa7d5715cc42";

const options = {
  method: 'GET',
  url: 'https://api.webflow.com/collections/63033e0414ab5dafa94cf51a/items',
  headers: {Authorization:`Bearer ${token}`}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(JSON.parse(body));
  webinar=body;
});

app.get("/webinar_details", (req, res)=>{
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        //console.log(JSON.stringify(body[0].items));
        res.send(JSON.parse(body));
      });
})




app.get("/speakers", (req, res)=>{
    request({
        method: 'GET',
        url: 'https://api.webflow.com/collections/630346448fbff43d15e8d1d4/items',
        headers: {Authorization:`Bearer ${token}`}
      }, (error, response, body)=>{
        if (error) throw new Error(error);
        res.send(JSON.parse(body));
        
      })
})



app.get("/points", (req, res)=>{
    request({
        method: 'GET',
        url: 'https://api.webflow.com/collections/630347586e4dd6a26b1fec88/items',
        headers: {Authorization:`Bearer ${token}`}
      }, (error, response, body)=>{
        if (error) throw new Error(error);
        res.send(JSON.parse(body));
        
      })
})



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