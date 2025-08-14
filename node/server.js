// const http = require("http");

// const server = http.createServer(( req, res ) => {

//     if ( req.url === "/") {

//         res.end("hellow this is your http server!");
//     } else if ( req.url === "/hai") {
//         res.end("hai this is your http server")
//     }
// });

// server.listen(3000, () => {
//     console.log("server running at : http://localhost:3000")
// });


const express = require("express");
const app = express();

const PORT = 3000 ;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hellow this is your express server");
});

app.get("/hai", ( req, res ) => {
    res.send("hai this is your express server");
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});