var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { username, password } = req.body;
  if (username !== "test" || password !== "test") {
    res.status(401).send("Unauthorized");
    return;
  }

  res.json({
    firstName: "Joe",
    lastName: "Black",
  });
});

module.exports = router;
