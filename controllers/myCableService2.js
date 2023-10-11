



function myCableService2(req,res,next){
    const cableService=[{id:01,name:"DSTV"},{id:02,name:"GOTV"},{id:03,name:"Startimes"}]
    res.status(200).json({express:{payLoad:cableService,status:true}}) 

}   



module.exports=myCableService2