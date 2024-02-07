const { log } = require("console");

const { division } = require('./division');
let http = require("http");

let port = +process.env.PORT || 5000;

http
    .createServer((req, res) => {
        res.writeHead(200, {
            "Context-type": "text/html",
        });
        res.end(
            `<div style="background-color: #f0f0f0; padding: 20px; text-align: center; font-family: Arial, sans-serif;">
                <h1 style="color: #333; font-family: Arial, sans-serif;">Jodie Smith made the frontend</h1>
                <p style="font-family: Arial, sans-serif;"> division answer is: ${division(6, 4)}</p>
                </div>`
        );
    })
    .listen(port, () => {
        console.log(`server is running on: http://localhost:${port}`);
    });
