//Create web server
const server = http.createServer((req, res) => {
    //Set the response status code and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //End the response with the message
    res.end('Hello World\n');
});

//Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


