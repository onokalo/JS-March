const express = require("express");
const router = express();
const path = require("path");

router.get("/contact", (req,res) => {
    // res.send("<h1>Contuct us</h1>")
    res.sendFile(path.join(__dirname, "../" ,"views", "contact.html")); //віддаємо дані
})

module.exports = router;
// export default router;