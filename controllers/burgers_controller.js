const express = require("express");
const router = express.Router();
const burgerInput = require("../models/burger.js");

router.get("/", function (req, res) {
    burgerInput.selectAll(function (data) {
        // console.log(data);
        var hbsObject = {
            burgers:data
        };
            console.log(hbsObject);
    res.render("index", hbsObject);
        
    })
})

// router.get("/", function (req, res) {
//     burger.all(function (data) {
//       var hbsObject = {
//         burgers: data
//       };
//       // console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });


// router.get("/first", function (req, res) {
//     burgerInput.selectAll(function (result) {
//         res.render("index", { data: result });
//     })

// })

// router.get("/api/first", function(req, res) {
//     orm.selectAll(function(result){
//         res.json(result);
//     })

//     console.log("success");

// });

module.exports = router;