
const axios = require('axios');




function myCableBundle2(req,res,next){

    res.status(200).json({express:{payLoad:[],status:true}})

    return
    if(req.query.cableType=="DSTV"){
        getDetail(1)
    }
    else if(req.query.cableType=="GOTV"){
        getDetail(2)

    }
    else if(req.query.cableType=="Startimes"){
        getDetail(3)

    }

    function getDetail(id){
        axios.get(`https://topupkonnect.com/api/allcabletv/0${id}`, {
            headers:{
              "X-API-KEY":process.env.apiKey2,
              "user_id":1014
            }
            })
            .then(function (response) {
               // console.log(response.data.data)
                res.status(200).json({express:{payLoad:response.data.data,status:true}})
            
            })
            .catch(function (error) {
              console.log(error);
              res.status(500).json({express:{payLoad:"server error ",status:false}})
    
            })
    }
}   


module.exports=myCableBundle2