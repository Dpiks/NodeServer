const http=require("http");

const PORT_ONE=7000;
const PORT_TWO=7500;

function handleRequestOne(req,res){
	  res.end("You are very helpful!!" + req.url);
}

function handleRequestTwo(req,res){
	  res.end("You talk rubbish!!:P" + req.url);
}

const serverOne=http.createServer(handleRequestOne);
const serverTwo=http.createServer(handleRequestTwo);

serverOne.listen(PORT_ONE, function(){
	console.log("Server listening on: http://localhost:%s", PORT_ONE);

});

serverTwo.listen(PORT_TWO, function(){
	console.log("Server listening on: http://localhost:%s", PORT_TWO);

});