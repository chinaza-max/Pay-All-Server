'use strict';

require("dotenv").config();

const http = require('http');
const express = require('express');
const cors = require("cors");

const app = express();
const server = http.createServer(app)
const port=process.env.PORT||5000;


var corsOptions = {
  exposedHeaders: ["set-cookie"],
  credentials: true// some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
//app.use(cors())
app.use('/', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin","https://pay-all.netlify.app")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET" )
  next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir));


const router=require('./router/router')

router(app);
if(process.env.NOde_ENV==="production"){

  //app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static("client/build"))
 // app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
}

server.listen(port,()=>console.log(`server started.... ${port}`))


///*   "start": "cross-env PORT=80 react-scripts start"*/

/**
  this help to solve mongodb error whe trying to connect
    from Control Panel -> Administration -> Services -> MongoDB
    control panel  -> system and security  ->Administrative tools  -> Services -> MongoDB
 */