const express = require("express");
const router = express.Router();

//posts
//index 
router.get("/", (req, res) => {
    res.send("GET for POSTS");
});

//show 
router.get("/:id", (req, res) => {
    res.send("post for show id");
});

//post 
router.post("/", (req, res) => {
    res.send("POST fpr users");
});

//delete
router.delete("/:id", (req, res) => {
    res.send("Delete fo the posts id");
});

module.exports = router;