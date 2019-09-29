const http = require("http");

const PORT = 81;

const Person = require('./Person.json');
const Dog = require('./Dog.json');

const server = http.createServer((reg, res) => {
    // console.log (reg.url);
    const url = reg.url;
    if(url==="/"){
        // console.log("/ - works");
        res.setHeader("Content-type", "text/html");
        // res.write("<h1>Hello World</h1>");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>Hello World</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if (url==="/about"){
        console.log("/about");
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>About us</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    
    else if (url==="/API/Person"){
        console.log("/API/Person");
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(Person));
    }

    else if (url==="/API/Dog"){
        console.log("/API/Dog");
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(Dog));
    }
    
    else{
        console.log("Page not found!");
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>404 Page not found!</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
})

server.listen(PORT);
// console.log(http);
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);
