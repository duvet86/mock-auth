var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    { value: "js", label: "javascript" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
  ]);
});

module.exports = router;
