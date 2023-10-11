const axios = require('axios');



function buyData(req,res,next){
   
    const network=req.query.network
    const recipient=req.query.customer
    const plan_id=req.query.amount

    const data = new URLSearchParams();
    data.append('network',"0"+network);
    data.append('recipient',recipient);
    data.append('plan_id',plan_id);


    console.log(network ,recipient ,plan_id);

  
    axios.post('https://topupkonnect.com/api/buydata',data, {
      headers:{
        "X-API-KEY":process.env.apiKey2,
        "user_id":1014
      }
      })
      .then(function (response) {

        console.log(response.data.status);
        if(response.data.status!='INSUFFICIENT_BALANCE'){
          res.status(200).json({express:{payLoad:response.data,status:true}}) 
        }
        else{
          console.log(response.data)
          res.status(401).json({express:{payLoad:"contact us when if you see this",status:false}}) 
        }
      })
      .catch(function (error) {

        console.log("error");
        console.log(error.response.data);

        res.status(599).json({express:{payLoad:"error from server",status:true}}) 

      })
}




module.exports=buyData