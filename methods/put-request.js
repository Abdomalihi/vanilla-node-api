const requestBodyParser = require("../utile/body-parser");
const writeToFile = require('../utile/write-to-file');
module.exports = async (req,res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
  let id = req.url.split('/')[3];
  const regexV4 = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  );
  if (!regexV4.test(id)) {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify({
        title: "Validation Failed", 
        message: "UUID Is Not Valid !!"
      })
    );
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    try {
      let body = await requestBodyParser(req);
      const index = req.movies.findIndex((movie) => {
      return movie.id === id;
      });
      if (index === -1) {
        res.statusCode = 404;
        res.write(JSON.stringify({title: "NOT FOUND", message: "Movie Not Found!!"}));
        res.end();
      } else {
        req.movies[index] = {id, ...body};
        writeToFile(req.movies);
        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end(JSON.stringify(req.movies[index]));
      }
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