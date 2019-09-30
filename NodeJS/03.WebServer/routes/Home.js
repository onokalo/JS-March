const express = require("express");
const router = express();
const path = require("path");

router.get("/", (req,res) => {
    // console.log(req); //запит який приходить мені
    res.sendFile(path.join(__dirname, "../" ,"views", "index.html")); //віддаємо дані
    // res.render("index", {
    //     title: "Node Pug",
    //     h1: "Hello pug!"
    // })
})

module.exports = router;
// export default router;