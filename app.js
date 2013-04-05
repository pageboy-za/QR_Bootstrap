var QRCode = require('qrcode');

    QRCode.toDataURL("nealle page",function(err,url){
     QRCode.save("nealle.png" , function(err, url)
        console.log(url);
    })
    
   
    
    ;
