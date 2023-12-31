const express=require("express")
const Tokens = require('csrf')
const Cookie = require('cookie')
const router=express.Router();
const csrfProtection=require("../controllers/csrfProtection")
const getBalanceAdmin=require("../controllers/getBalanceAdmin")
const getBalanceAdmin2=require("../controllers/getBalanceAdmin2")
const verifyMytransaction=require("../controllers/verifyMytransaction")
const verifyMytransaction2=require("../controllers/verifyMytransaction2")
const verifyMytransaction3=require("../controllers/verifyMytransaction3")

const dataPlanNetworkCodes=require("../controllers/dataPlanNetworkCodes")
const dataPriceListAndDataID=require("../controllers/dataPriceListAndDataID")
const dataPriceListAndDataID2=require("../controllers/dataPriceListAndDataID2")
const getAirTimedata=require("../controllers/getAirTimedata")
const validateNumber3=require("../controllers/validateNumber3")
const validateTelData=require("../controllers/validateTelData")

const myService=require("../controllers/myService")
const myCableService2=require("../controllers/myCableService2")
const myCableBundle2=require("../controllers/myCableBundle2")
const myDataService=require("../controllers/myDataService")
const verifyTel=require("../controllers/verifyTel")
const verifyCableNo2=require("../controllers/verifyCableNo2")
const buyCableSub2=require("../controllers/buyCableSub2")
const myDiscoService2=require("../controllers/myDiscoService2")
const validateMeterNo2=require("../controllers/validateMeterNo2")







let tokens=new Tokens()

router.get('/api/getBalanceAdmin',csrfProtection, getBalanceAdmin,(req, res)=>{})
router.get('/api2/getBalanceAdmin2',csrfProtection, getBalanceAdmin2,(req, res)=>{})
router.get('/api/verifyMytransaction',csrfProtection, verifyMytransaction,(req, res)=>{})
router.get('/api2/verifyMytransaction2',csrfProtection, verifyMytransaction2,(req, res)=>{})
router.get('/api2/verifyMytransaction3',csrfProtection, verifyMytransaction3,(req, res)=>{})

router.get('/api/dataPlanNetworkCodes',csrfProtection, dataPlanNetworkCodes,(req, res)=>{})
router.get('/api/dataPriceListAndDataID',csrfProtection, dataPriceListAndDataID,(req, res)=>{})
router.get('/api2/dataPriceListAndDataID2',csrfProtection, dataPriceListAndDataID2,(req, res)=>{})
router.get('/api3/getAirTimedata3',csrfProtection,getAirTimedata,(req, res)=>{})
router.get('/api3/validateNumber3',csrfProtection,validateNumber3,(req, res)=>{})
router.get('/api/validateTelData',csrfProtection,validateTelData,(req, res)=>{})

router.get('/api/myservice',csrfProtection,myService,(req, res)=>{})
router.get('/api/myDataService',csrfProtection,myDataService,(req, res)=>{})
router.get('/api2/myCableService2',csrfProtection,myCableService2,(req, res)=>{})
router.get('/api2/myCableBundle2',csrfProtection,myCableBundle2,(req, res)=>{})
router.get('/api/verifyTel',csrfProtection,verifyTel,(req, res)=>{})
router.get('/api2/verifyCableNo2',csrfProtection,verifyCableNo2,(req, res)=>{})
router.get('/api2/buyCableSub2',csrfProtection,buyCableSub2,(req, res)=>{})
router.get('/api2/myDiscoService2',csrfProtection,myDiscoService2,(req, res)=>{})
router.get('/api2/validateMeterNo2',csrfProtection,validateMeterNo2,(req, res)=>{})









//this route protect all form submission 
router.get('/form',function (req, res) {

    let secret = tokens.secretSync()
    let token = tokens.create(secret)

    res.setHeader('Set-Cookie', Cookie.serialize('csrfSecret',secret, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
    })); 

    return  res.status(200).json({express:{payLoad:token,payLoad2:process.env.FLW_PUBLIC_KEY,payLoad3:process.env.PS_PUBLIC_KEY, status:true}})    
   
})

module.exports=router;