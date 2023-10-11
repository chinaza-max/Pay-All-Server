
const axios = require('axios');




function myDiscoService(req,res,next){

  res.status(200).json({express:{payLoad:[],status:true}}) 

  return
    axios.get('https://topupkonnect.com/api/fetchdisco',{
        headers:{
          "X-API-KEY":process.env.apiKey2,
          "user_id":1014
        }
        })
        .then(function (response) {
            
            if(response.data.status==true){
                res.status(200).json({express:{payLoad:response.data.data,status:true}}) 
            }
       
        })
        .catch(function (error) {
  
         // console.log(error.response.data);
          res.status(500).json({express:{payLoad:"error from server",status:true}}) 
  
        })
}


module.exports=myDiscoService