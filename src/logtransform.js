var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var needle = require("needle");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.post("/",function(req,res){
  //apply transformation

  //post request to db
  needle.post('http://localhost:3000/log', req.body,
      function(err, resp, body){
          res.json(body);
          console.log(body);
  });
});

router.post("/log", function(req, res){
  res.json({"status": 200});
});
app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
