const http = require("http");

const server = http.createServer(( req, res ) => {

    if ( req.url === "/") {

        res.end("hellow this is your http server!");
    } else if ( req.url === "/hai") {
        res.end("hai this is your http server")
    }
});

server.listen(3000, () => {
    console.log("server running at : http://localhost:3000")
});