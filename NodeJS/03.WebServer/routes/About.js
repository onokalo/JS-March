const express = require("express");
const router = express();
const path = require("path");

router.get("/about", (req,res) => {
    // res.send("<h1>About us</h1>")
    res.sendFile(path.join(__dirname, "../" ,"views", "about.html")); //віддаємо дані
})

module.exports = router;
// export default router;