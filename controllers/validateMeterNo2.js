

const axios = require('axios');



function validateMeterNo2(req,res,next){


    
    const data = new URLSearchParams();
    console.log(req.query.disco)
    console.log(req.query.meternumber)
    console.log("req.query.meternumber")





    data.append('disco',req.query.disco);
    data.append('meternumber',req.query.meternumber);


    axios.post("https://topupkonnect.com/api/validatemeter",data,{
        headers:{
            "X-API-KEY":process.env.apiKey2,
            "user_id":1014
        }       
        })
        .then(function (response) {

           if(response.data.status=="received"){
                res.status(200).json({express:{payLoad:response.data.customerName,status:true}})

           }else{
                res.status(403).json({express:{payLoad:"could not verify card number or check your selctions(Type)",status:true}})
           }
        
        })
        .catch(function (error) {
          res.status(500).json({express:{payLoad:"server error ",status:false}})
        })
}



module.exports=validateMeterNo2