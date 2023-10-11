
const sendMail=require("./email.js")



function handleEmail(req,res,next){

    console.log("=============================================")
    console.log("=============================================")
    console.log("=============================================")
    console.log("=============================================")
    console.log("=============================================")
    console.log("=============================================")


    let obj={
        tel:req.query.tel,
        reference:req.query.reference,
        transaction_id:req.query.transaction_id,
        billDetails:req.query.billDetails,
        amont:req.query.amont,
        email:req.query.email,
    }
    let email="customerservicepayall@gmail.com"
    let subject=req.query.serviceType
    let body=obj

    sendMail(email,subject,"payAll",body,(err,data)=>{

        console.log(err)
        console.log(data)

        if(err){
            return  res.status(500).json({express:{payLoad:"encounter error sending email",status:false}})
        }
        else{

            return  res.status(200).json({express:{payLoad:"email has been sent ",status:true}})
        }
      })
}

module.exports=handleEmail