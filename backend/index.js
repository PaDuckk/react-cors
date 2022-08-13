const http = require("http");
const port = 3001;

//create a server object:
http
  .createServer(function (req, res) {
    console.log(req.method);
    console.log(req.headers);

    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(port); //the server object listens on port 8080

`
$ curl -i -X GET http://echo.jsontest.com/key/value/anotherKey/anotherValue
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=ISO-8859-1
Date: Wed, 30 Oct 2013 22:19:10 GMT
Server: Google Frontend
Cache-Control: private
Alternate-Protocol: 80:quic,80:quic
Transfer-Encoding: chunked

{
   "anotherKey": "anotherValue",
   "key": "value"
}
$
`;
