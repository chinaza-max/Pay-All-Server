require('dotenv').config(); 
const nodemailer=require('nodemailer');





let auth = {
    type: 'oauth2',
    user: 'chinazaogbonna10000@gmail.com',
    clientId: '5915305382-ajjjt5nkov98je8310rjbum7t8348lqr.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04QIV68VkGNjyCgYIARAAGAQSNwF-L9IrSB7JG3aPEnLdanVXFBjjEHwx2cuF0PReq8Jz6UpVoYwQQ7CpIm_dI929REUym2JZeC8',
};

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:auth
});

const sendMail=(email,subject,text,body,cb)=>{

    let mailOptions='';

         mailOptions={

            from:"chinazaogbonna10000@gmail.com",
            to:email,
            attachments: [{
                filename: 'twitter.png',
                path: `${__dirname}/../public/images/twitter.png`,
                cid: 'img1' //same cid value as in the html img src
                },
                {
                    filename: 'myImg.png',
                    path: `${__dirname}/../public/images/myImg.png`,
                    cid: 'img2' //same cid value as in the html img src
                    },
                  
                    {
                        filename: 'facebook.png',
                        path: `${__dirname}/../public/images/facebook.png`,
                        cid: 'img5' //same cid value as in the html img src
                        },
                        {
                            filename: 'insta.png',
                            path: `${__dirname}/../public/images/insta.png`,
                            cid: 'img6' //same cid value as in the html img src
                            },
                            {
                                filename: 'logo2.jpg',
                                path: `${__dirname}/../public/images/logo2.jpg`,
                                cid: 'img8' //same cid value as in the html img src
                                },],
            subject,
            text,
            html:` 
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" style="box-sizing: border-box">
            <head style="box-sizing: border-box">
            <title style="box-sizing: border-box"></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" style="box-sizing: border-box">
            <meta content="width=device-width,initial-scale=1" name="viewport" style="box-sizing: border-box">
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" type="text/css" style="box-sizing: border-box">
            <!--<![endif]-->
            </head>
            <body style="margin:0;background-color:#1a30eb;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none;box-sizing:border-box;">
                <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#1a30eb;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#1a30eb;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:20px;padding-bottom:10px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="vertical-align:middle;color:#000;font-family:inherit;font-size:14px;text-align:center;box-sizing:border-box;">
                                                                            <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;"><tr style="box-sizing: border-box">
            <td style="vertical-align:middle;text-align:center;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;box-sizing:border-box;">
                                                                                        <img align="center" alt class="icon" height="32" src="cid:img8" style="display:block;height:auto;margin:0 auto;border:0;box-sizing:border-box;" width="120">
            </td>
                                                                                </tr></table>
            </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;border-bottom:0 solid #fff;border-left:0 solid #fff;border-radius:30px 30px 0 0;border-right:0 solid #fff;border-top:0 solid #fff;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="padding-bottom:30px;padding-left:60px;padding-right:60px;padding-top:70px;text-align:center;width:100%;box-sizing:border-box;padding:10px 60px 30px !important;">
                                                                            <h1 style="margin:0;color:#020b22;direction:ltr;font-family:Poppins,Arial,Helvetica,sans-serif;font-size:33px !important;font-weight:700;letter-spacing:normal;line-height:150%;text-align:center;margin-top:0;margin-bottom:0;box-sizing:border-box;">
                                                                                <span class="tinyMce-placeholder" style="box-sizing: border-box">Thank you for
                                                                                    using our service</span>
            </h1>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="width:100%;padding-right:0;padding-left:0;box-sizing:border-box;">
                                                                            <div align="center" class="alignment" style="line-height:10px;box-sizing:border-box;"><img alt="Social profile" class="fullMobileWidth" src="cid:img2" style="display:block;height:auto;border:0;width:100% !important;max-width:100%;box-sizing:border-box;" title="Social profile" width="442"></div>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:60px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="padding-bottom:5px;padding-left:60px;padding-right:60px;padding-top:5px;box-sizing:border-box;padding:5px 30px !important;">
                                                                            <div style="color:#878787;direction:ltr;font-family:Poppins,Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:19.2px;box-sizing:border-box;">
                                                                                <p style="margin:0;margin-bottom:16px;box-sizing:border-box;line-height:inherit;">
                                                                                    <strong style="box-sizing: border-box">Name</strong>: ${body.name}
                                                                                </p>
                                                                                <p style="margin:0;margin-bottom:16px;box-sizing:border-box;line-height:inherit;"><strong style="box-sizing: border-box">Meter
                                                                                        unit</strong> : ${body.creditToken} </p>
                                                                                <p style="margin:0;margin-bottom:16px;box-sizing:border-box;line-height:inherit;">
                                                                                    <strong style="box-sizing: border-box">Time_stamp</strong> :${body.time_stamp}</p>
                                                                                <p style="margin:0;box-sizing:border-box;line-height:inherit;"><strong style="box-sizing: border-box">Transaction id </strong>:
                                                                                    ${body.transaction_id}</p>
                                                                                <p style="margin:0;box-sizing:border-box;line-height:inherit;"><strong style="box-sizing: border-box">Amount </strong>:
                                                                                ${body.amont}</p>

                                                                            </div>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:50px;padding-right:50px;vertical-align:top;padding-top:0;padding-bottom:40px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                              
            <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="padding-bottom:10px;padding-top:5px;text-align:center;width:100%;box-sizing:border-box;">
                                                                            <h2 style="margin:0;color:#878787;direction:ltr;font-family:Poppins,Arial,Helvetica,sans-serif;font-size:20px !important;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;box-sizing:border-box;">
                                                                                <span class="tinyMce-placeholder" style="box-sizing: border-box">We promise to
                                                                                    share only cool stuff! 🤞🏻</span>
            </h2>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f2f5ff;border-radius:0;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;border-bottom:1px solid #1a30eb;border-top:1px solid #1a30eb;padding-left:45px;padding-right:25px;vertical-align:top;border-right:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="50%">
                                                           
            </td>
                                                            <td class="column column-2" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;border-bottom:1px solid #1a30eb;border-left:0 solid #1a30eb;border-top:1px solid #1a30eb;padding-left:30px;padding-right:30px;vertical-align:top;border-right:0;box-sizing:border-box;width:100%;display:block;padding:30px 30px 30px 50px !important;" width="50%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="padding-bottom:45px;padding-left:5px;padding-right:30px;padding-top:70px;box-sizing:border-box;">
                                                                            <div style="font-family:sans-serif;box-sizing:border-box;">
                                                                                <div class style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#353d46;line-height:1.2;font-family:Poppins,Arial,Helvetica,sans-serif;box-sizing:border-box;">
                                                                                    <p style="margin:0;font-size:14px;text-align:left;mso-line-height-alt:16.8px;box-sizing:border-box;line-height:inherit;">
                                                                                        <span style="font-size:20px;box-sizing:border-box;"><span style="color:#1a30eb;box-sizing:border-box;">&gt; </span>Get
                                                                                            nice offer on mtn,9mobile,airtel,glo
                                                                                            data</span><br style="box-sizing: border-box"><br style="box-sizing: border-box"><span style="font-size:20px;box-sizing:border-box;"><span style="color:#1a30eb;box-sizing:border-box;">&gt;</span> Fast
                                                                                            service</span><br style="box-sizing: border-box"><br style="box-sizing: border-box"><span style="font-size:20px;box-sizing:border-box;"><span style="color:#1a30eb;box-sizing:border-box;">&gt; </span>your
                                                                                            money is refundable if transaction was
                                                                                            not successful after 48 hours</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:50px;padding-right:50px;vertical-align:top;padding-top:40px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="padding-bottom:15px;padding-left:30px;padding-right:30px;padding-top:10px;box-sizing:border-box;">
                                                                            <div style="font-family:sans-serif;box-sizing:border-box;">
                                                                               
                                                                            </div>
                                                                        </td>
                                                                    </tr></table>












          








            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;background-color:#c13584;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="vertical-align:middle;color:#fff;font-family:inherit;font-size:16px;padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:25px;text-align:center;box-sizing:border-box;">
                                                                            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="alignment" style="vertical-align:middle;text-align:center;box-sizing:border-box;">
                                                                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                        <!--[if !vml]><!-->
                                                                                        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;">
            <!--<![endif]--><tr style="box-sizing: border-box">
            <td style="vertical-align:middle;text-align:center;padding-top:10px;padding-bottom:25px;padding-left:10px;padding-right:10px;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="text-decoration:none;box-sizing:border-box;" target="_self"><img align="center" alt="Instagram" class="icon" height="32" src="cid:img6" style="display:block;height:auto;margin:0 auto;border:0;box-sizing:border-box;" width="32"></a>
            </td>
                                                                                            </tr>
            <tr style="box-sizing: border-box">
            <td style="font-family:Poppins,Arial,Helvetica,sans-serif;font-size:16px;color:#fff;vertical-align:middle;letter-spacing:undefined;text-align:center;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="color:#ffffff;text-decoration:none;box-sizing:border-box;" target="_self">Instagram</a>
                                                                                                </td>
                                                                                            </tr>
            </table>
            </td>
                                                                                </tr></table>
            </td>
                                                                    </tr></table>
            </td>
                                                            <td class="column column-2" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;background-color:#6386e0;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="vertical-align:middle;color:#fff;font-family:inherit;font-size:16px;padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:25px;text-align:center;box-sizing:border-box;">
                                                                            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="alignment" style="vertical-align:middle;text-align:center;box-sizing:border-box;">
                                                                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                        <!--[if !vml]><!-->
                                                                                        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;">
            <!--<![endif]--><tr style="box-sizing: border-box">
            <td style="vertical-align:middle;text-align:center;padding-top:10px;padding-bottom:25px;padding-left:10px;padding-right:10px;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="text-decoration:none;box-sizing:border-box;" target="_self"><img align="center" alt="Facebook" class="icon" height="32" src="cid:img5" style="display:block;height:auto;margin:0 auto;border:0;box-sizing:border-box;" width="18"></a>
            </td>
                                                                                            </tr>
            <tr style="box-sizing: border-box">
            <td style="font-family:Poppins,Arial,Helvetica,sans-serif;font-size:16px;color:#fff;vertical-align:middle;letter-spacing:undefined;text-align:center;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="color:#ffffff;text-decoration:none;box-sizing:border-box;" target="_self">Facebook</a>
                                                                                                </td>
                                                                                            </tr>
            </table>
            </td>
                                                                                </tr></table>
            </td>
                                                                    </tr></table>
            </td>
                                                            <td class="column column-3" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;background-color:#7bc8ff;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="vertical-align:middle;color:#fff;font-family:inherit;font-size:16px;padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:25px;text-align:center;box-sizing:border-box;">
                                                                            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="alignment" style="vertical-align:middle;text-align:center;box-sizing:border-box;">
                                                                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                        <!--[if !vml]><!-->
                                                                                        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;">
            <!--<![endif]--><tr style="box-sizing: border-box">
            <td style="vertical-align:middle;text-align:center;padding-top:10px;padding-bottom:25px;padding-left:10px;padding-right:10px;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="text-decoration:none;box-sizing:border-box;" target="_self"><img align="center" alt="Twitter" class="icon" height="32" src="cid:img1" style="display:block;height:auto;margin:0 auto;border:0;box-sizing:border-box;" width="32"></a>
            </td>
                                                                                            </tr>
            <tr style="box-sizing: border-box">
            <td style="font-family:Poppins,Arial,Helvetica,sans-serif;font-size:16px;color:#fff;vertical-align:middle;letter-spacing:undefined;text-align:center;box-sizing:border-box;margin:0 auto;">
                                                                                                    <a href="https://www.example.com" style="color:#ffffff;text-decoration:none;box-sizing:border-box;" target="_self">Twitter</a>
                                                                                                </td>
                                                                                            </tr>
            </table>
            </td>
                                                                                </tr></table>
            </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f2f5ff;border-radius:0 0 30px 30px;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:15px;padding-bottom:15px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                               
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#1a30eb;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:25px;padding-bottom:25px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="20" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="box-sizing: border-box">
                                                                            <div style="font-family:sans-serif;box-sizing:border-box;">
                                                                                <div class style="font-size:12px;font-family:Poppins,Arial,Helvetica,sans-serif;mso-line-height-alt:18px;color:#fafafa;line-height:1.5;box-sizing:border-box;">
                                                                                    <p style="margin:0;font-size:10px;text-align:center;mso-line-height-alt:15px;box-sizing:border-box;line-height:inherit;">
                                                                                        <span style="font-size:10px;box-sizing:border-box;"><span style="box-sizing:border-box;">© 2022
                                                                                                Company. </span></span><span style="font-size:10px;box-sizing:border-box;"><span style="box-sizing:border-box;">
                                                                                                All Rights Reserved.</span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td style="box-sizing: border-box">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:100% !important;box-sizing:border-box;" width="680"><tbody style="box-sizing: border-box"><tr style="box-sizing: border-box">
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0;box-sizing:border-box;width:100%;display:block;" width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;" width="100%"><tr style="box-sizing: border-box">
            <td class="pad" style="vertical-align:middle;color:#9d9d9d;font-family:inherit;font-size:15px;padding-bottom:5px;padding-top:5px;text-align:center;box-sizing:border-box;">
                                                                            
            </td>
                                                                    </tr></table>
            </td>
                                                        </tr></tbody></table>
            </td>
                                        </tr></tbody></table>
            </td>
                        </tr></tbody></table>
            <!-- End -->
            </body>
            </html>`,
       
        }
    
    transporter.sendMail(mailOptions,function(err,data){

            if(err){
              return  cb(err,null)
            }
            else{
                return  cb(null,data)
            }
    });
    
}

module.exports=sendMail;




