const fs = require('fs');

function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log("uh oh, no such file", err)
            process.exit(1)
        }
        console.log(data)
    })
}

path = process.argv[2]

cat(path)