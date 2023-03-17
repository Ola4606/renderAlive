const axios = require("axios");

function helloResponse(req, res) {
  //wait 7 mins then make get req to hourlySplashes
  setTimeout(function () {
    console.log("Req to hourlySplashes");
    axios.get("");
  }, 420000);
  res.status(200).json({ status: "Hello" });
}

module.exports = { helloResponse, startAliveCycle };
