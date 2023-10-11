
const axios = require('axios');


function verifyCableNo2(req,res,next){


    const data = new URLSearchParams();
    data.append('cabletv', "0"+req.query.cabletype);
    data.append('smartcard',""+req.query.cableNo);


    axios.post("https://topupkonnect.com/api/verifytv",data,{
        headers:{
            "X-API-KEY":process.env.apiKey2,
            "user_id":1014
        }       
        })
        .then(function (response) {


          console.log(response.data)
           if(response.data.status=="received"){
                res.status(200).json({express:{payLoad:response.data.account_name,status:true}})

           }else{
                res.status(403).json({express:{payLoad:"check card no or your selections(Type)",status:false}})
           }
        
        })
        .catch(function (error) {
          console.log(error);
          res.status(500).json({express:{payLoad:"server error ",status:false}})
        })

}


module.exports=verifyCableNo2