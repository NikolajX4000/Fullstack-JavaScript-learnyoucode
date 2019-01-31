var http = require("http")

http.get(process.argv[2], callback)

function callback(response) {
    var res = ''
    response.setEncoding("utf8")
    response.on("data", (data) => res.concat(data))
    return response.on('end', () => console.log(`${res.length} ${res}`));
}