const crypto = require('crypto');
const requestBodyParser = require("../utile/body-parser");
const writeToFile = require('../utile/write-to-file');
module.exports = async (req,res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      writeToFile(req.movies);
      res.writeHead(201, {"Content-Type" : "application/json"});
      res.end();
    } catch (err) {
      console.log(err);
      res.writeHead(201, {"Content-Type" : "application/json"});
      res.end(
      JSON.stringify({
        title: "Validation Failed", 
        message: "Request Body Is Not Valid !! "
      })
    );
    }
  } else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify({
        title: "NOT FOUND", 
        message: "Route Not Found!!"
      })
    );
  }
};