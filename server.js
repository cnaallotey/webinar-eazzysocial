const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const router = express.Router()

const path = require('path')

const app = express()

//using cors
var allowedOrigins = ['http://localhost:3003','http://eazzysocial.blog', 'https://eazzysocial.blog', 'http://blog.eazzysocial.com', 'http://www.eazzysocial.com', 'http://eazzysocial.com', 'http://www.eazzysocial.blog', 'http://webinar.eazzysocial.com', 'https://webinar.eazzysocial.com', 'http://localhost:3000' ];

app.use(cors(

  {
    origin: function(origin, callback){    // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }    return callback(null, true);
    }
  }
))


//configuring body parser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const request = require('request');

var webinar=[];

const token = "07c7111e3a86e0a7bf9cee656bc07ab76a6f7f593623f5f1ad1a5d599222f3dc";

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