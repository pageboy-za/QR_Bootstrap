var QRCode = require(__dirname+'/../qrcode')
	, connect = require('express');
	
function generateQRCode(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	var VCard = "BEGIN:VCARD"
+"VERSION:3.0"
+"N:Page;Nealle;Andrew;;"
+"FN:Nealle Page"
+"ORG:The Book;"
+"TITLE:Vice President"
+"EMAIL;type=INTERNET;type=WORK;type=pref:nealle.page@citi.com"
+"TEL;type=HOME;type=VOICE;type=pref:+44 1780 749186"
+"TEL;type=WORK;type=VOICE:+44 20 7986 7393"
+"TEL;type=IPHONE;type=CELL;type=VOICE:+44 7590 029708"
+"item1.ADR;type=WORK;type=pref:;;Citigroup Centre\nCanada Square\nCanary Wharf;London;;E14 5LB;United Kingdom"
+"item1.X-ABADR:gb"
+"X-SOCIALPROFILE;type=twitter;x-userid=45414910:http://twitter.com/pageboy_za"
+"item2.URL;type=pref:http://sites.google.com/site/neallepage"
+"item2.X-ABLabel:_$!<HomePage>!$_"
+"BDAY;X-APPLE-OMIT-YEAR=1604:1604-05-24"
+"UID:E1653DD4-BABC-4A44-BB05-E72E9DEE9F0B"
+"X-ABUID:3F463582-7F02-476D-B689-12A4025AC307:ABPerson"
+"END:VCARD";
	
	//QRCode.QRCodeDraw.color.dark = '#d4d4d4';
	QRCode.toDataURL(VCard,function(err,url){
		if(err) console.log('error: '+err);
		res.end("<!DOCTYPE html/><html><head><style>body{backgroundcolor:#000000;}</style> <title>node-qrcode</title></head><body><p>The barcode for your request is:</p><img src='"+url+"'/><p>"+url+"</body></html>");
	});
}

connect.createServer(generateQRCode).listen(3030);
console.log('QR server started on port 3030');
