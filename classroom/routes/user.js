const express = require("express"); 
const router = express.Router();





//index  - users
router.get("/", (req, res) => { // whe we use router innsteadd of app it simialar in router there is also the app,get
    res.send("GET for user");
});

//show - users
router.post("/:id", (req, res) => {
    res.send("post for show users");
});

//delete  - users
router.delete("/:id", (req, res) => {
    res.send("Deelete users");
});

module.exports = router;