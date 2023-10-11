const axios = require('axios');


/**
 * 
 * for now skip this  part there api is having issues returning balance 
 * 08160527086
 */

function VerifyMytransaction(req,res,next){
    
  res.status(200).json({express:{payLoad:"process request",status:true}})

  return
    axios.get('https://client.paytev.com/api/v1/balance', {
        params: {
          "api-token":"4dab8e0895b0ba5266b94274a42ee745bf42d1fd",
          format:"json"
        }
      })
      .then(function (response) {

        if(req.query.amount<response.data.balance){
            res.status(200).json({express:{payLoad:"process request",status:true}})
        }
        else{
            res.status(401).json({express:{payLoad:"cant process request ",status:false}})
        }
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({express:{payLoad:"server error",status:false}})
      })
}




module.exports = VerifyMytransaction;