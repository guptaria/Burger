const express = require("express");
const router = express.Router();
const burgerInput = require("../models/burger.js");

router.get("/", function (req, res) {
  burgerInput.selectAll(function (data) {
    // console.log(data);
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

  })
})

router.post("/api/burgers", function (req, res) {
  burgerInput.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
    // res.json(result);
  });
});


router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgerInput.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    console.log(result);
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//   router.delete("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;