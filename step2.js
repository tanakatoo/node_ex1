const fs = require('fs');
const axios = require('axios');
const { webcrypto } = require('crypto');


let path = process.argv[2]
let checkPath = path.slice(0, 4)
if (checkPath == "http") {
    webCat(path)

} else {
    cat(path)
}
function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log("uh oh, no such file", err)
            process.exit(1)
        }
        console.log(data)
    })
}


async function webCat(url) {
    try {
        let content = await axios.get(url)
        console.log(content.data)
    } catch (err) {
        console.log("error", err)
        process.exit(1)
    }

}