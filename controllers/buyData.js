
const axios = require('axios');


function buyData(req,res,next){
    
    const network=req.query.network
    const phone=req.query.phone
    const amount=req.query.amount


    
   console.log(network, phone ,amount)


   res.status(200).json({express:{payLoad:"Transaction Successful",status:true}}) 

   /*
   
    axios.get('https://client.paytev.com/api/v1/data', {
        params: {
        "api-token":process.env.apiKey,
        "format":"json",
        network,
        phone,
        amount
        }
      })
      .then(function (response) {
        console.log("error");
        res.status(200).json({express:{payLoad:response.message,status:true}}) 
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({express:{payLoad:"error from server",status:false}}) 

      }) 
    */

}




module.exports=buyData