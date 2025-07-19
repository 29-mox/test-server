let http = require('http')
let fs = require('fs')

let server = http.createServer()
server.on('request', (request, response) => {
    
    // liaison avec le fichier html
    fs.readFile('index.html', (err, data) => {
        if (err) throw err

        response.writeHead(200, {
            'content-type' : 'text/html; charset=utf-8'
        })
        response.end(data)
    })      
}).listen(8080)