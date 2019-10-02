const express = require("express");
const router = express();
const path = require("path");

router.get("/", (req,res) => {
    // console.log(req); //запит який приходить мені
    res.sendFile(path.join(__dirname, "../" ,"views", "index.pug")); //віддаємо дані
    res.render("index", {
        title: "Home page",
        // h1: "Hello pug!",
        // name: "Bill"
    })
})

module.exports = router;
// export default router;