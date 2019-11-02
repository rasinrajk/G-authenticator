var speakeasy = require('speakeasy');
var QRCode = require('qrcode');


function Twofa(){
this.qrCode = ""
this.secret 
this.token


this.qrCodeGen = async function  () {
  console.log("qr code generate");
  this.secret = speakeasy.generateSecret({length: 20});
  console.log("Secret",this.secret.base32); // Save this value to your DB for the user
  // Example:  JFBVG4R7ORKHEZCFHZFW26L5F55SSP2Y
  this.qrCode = await QRCode.toDataURL(this.secret.otpauth_url)


  // QRCode.toDataURL(secret.otpauth_url, function(err, img_data) {
  //   this.qrCode=img_data
  //   // return img_data;
  // });
  
}

this.tfaValidate = async function (){
  console.log("qr code validate");
  // response.send({
  //   "token": Speakeasy.totp({
  //       secret: request.body.secret,
  //       encoding: "base32"
  //   }),
  //   "remaining": (30 - Math.floor((new Date()).getTime() / 1000.0 % 30))
// });
// });


// Load the secret.base32 from their user record in database
 secretcode = this.secret.base32
 console.log("Secret",secretcode);

this.token = await speakeasy.totp({
  secret: secretcode,
  encoding: 'base32'
});

// console.log("Token",token)
}

}

module.exports ={ Twofa}