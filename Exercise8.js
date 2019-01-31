var http = require("http")
var bl = require('bl')

http.get(process.argv[2], callback)

function callback(response) {
    var res = ''
    response.pipe(bl((err, data) => {

    }))
}