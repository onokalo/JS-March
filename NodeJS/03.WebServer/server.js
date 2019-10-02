const express = require("express");
const path = require("path");

const home = require('./routes/Home');
const about = require('./routes/About');
const contact = require('./routes/Contact');

const PORT = 3000;
const app = express();

app.set("views", "views");
app.set('view engine', "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(home);
app.use(about);
app.use(contact);

app.listen(PORT);
