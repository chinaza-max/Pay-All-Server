
const axios = require('axios');





function buyCableSub2(req,res,next){


    const cabletv=req.query.cabletv
    const smartcard_iuc=req.query.smartcard_iuc
    const package_code=req.query.package_code

    console.log(cabletv , smartcard_iuc , package_code)
    console.log("smartcard_iuc")


    const data = new URLSearchParams();
    data.append('cabletv',"0"+cabletv);
    data.append('smartcard_iuc',smartcard_iuc);
    data.append('package_code',package_code);

  
    
    axios.post('https://topupkonnect.com/api/subscribetv',data, {
      headers:{
        "X-API-KEY":process.env.apiKey2,
        "user_id":1014
      }
      })
      .then(function (response) {


        if(response.data.status!='INSUFFICIENT_BALANCE'){
          res.status(200).json({express:{payLoad:response.data,status:true}}) 
        }
        else{
          //res.status(200).json({express:{payLoad:response.data,status:true}}) 

          res.status(401).json({express:{payLoad:"cant process request",status:false}}) 
        }
      })
      .catch(function (error) {

        console.log(error.response.data);
        res.status(500).json({express:{payLoad:"error from server",status:true}}) 

      })

      
}



module.exports=buyCableSub2