
const axios = require('axios');
const sendMail=require("./emailElectricity")




function buyDisco2(req,res,next){

   console.log("id : "+req.query.disco_id)
   console.log( "NO : "+req.query.meternumber)
   console.log("Amount : "+req.query.amount)

    const data = new URLSearchParams();
    data.append('disco_id',req.query.disco_id);
    data.append('meternumber',req.query.meternumber);
    data.append('amount',req.query.amount);



  //  res.status(200).json({express:{payLoad:"2222-222332-4456-9",status:true}})


    
    axios.post("https://topupkonnect.com/api/payElectricity",data,{
        headers:{
            "X-API-KEY":process.env.apiKey2,
            "user_id":1014
        }       
        })
        .then(function (response) {

            if(response.data.status=="TRANS_RECEIVED"){
                
                let currentdate = new Date(); 
                let obj={
                    tel:08184724615,
                    transaction_id:response.data.transaction_id,
                    creditToken:response.data.token[0].creditToken,
                    amont:req.query.amount,
                    name:req.query.customerName,
                    time_stamp:currentdate,
                }
                let email=req.query.email
                let subject="Buying of electricity unit"
                let body=obj

                res.status(200).json({express:{payLoad:response.data.token[0].creditToken,status:true}})

                sendMail(email,subject,"payAll",body,(err,data)=>{
                    if(err){
                        return  res.status(500).json({express:{payLoad:"encounter error sending email",status:false}})
                    }
                })

           }else{

                res.status(403).json({express:{payLoad:"contact support if you see this",status:false}})
           }
        
        })
        .catch(function (error) {
          console.log(error);
          res.status(500).json({express:{payLoad:"server error ",status:false}})
        })
        

}




module.exports=buyDisco2