
function getData(url,filepath,funcToWriteToFile)
{
	request(url, (error, response, body) => {
  	//console.log('error:', error); // Print the error if one occurred
  	//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  	//console.log('body:', body); // Print the HTML for the Google homepage.
		if(!error)
			funcToWriteToFile(body,filepath);
		else	
			console.log("NOT VALID URL!!");
			return;
	});
}
const printOut = (body,filepath) => {
	fs.writeFile(filepath , body,err => {
		if(err){
			console.error("FILEPATH INVALID");
			return;
		}
	
	const {size} = fs.statSync(filepath)
	console.log(`Downloaded and saved ${size} bytes to ${filepath}`)
	})
	
}

const request = require('request');
const fs = require('fs');
let arguments = process.argv.slice(2);

getData(arguments[0],arguments[1],printOut);