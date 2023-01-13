const fs = require('fs');
const axios = require('axios');

let outPath = ""
let path = ""
if (process.argv[2] == "--out") {
    outPath = process.argv[3]
    path = process.argv[4]
} else {
    path = process.argv[2]
}

let checkPath = path.slice(0, 4)
if (checkPath == "http") {
    webCat(path)
} else {
    cat(path)
}

function writeToFile(data) {

    fs.writeFile(outPath, data, "utf8", err => {
        if (err) {
            console.log("uh oh, no such file", err)
            process.exit(1)
        }
    })
}


function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        if (outPath != '') {
            writeToFile(data)
        } else {
            console.log(data)
        }
    })
}


async function webCat(url) {
    try {
        let content = await axios.get(url)
        if (outPath != '') {
            writeToFile(content)
        } else {
            console.log(content)
        }
    } catch (err) {
        return err
    }
}