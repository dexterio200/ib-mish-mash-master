const fetch = require("node-fetch")


module.exports.getTatooineResidents = function() {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.co/api/planets/1/")
            .then(response => response.json())
            .then(myJson => resolve(myJson.residents))
            .catch(err => reject(err))
    })
}


module.exports.promiseMeAString = function(str) {
    return new Promise((resolve, reject) => {
        if (str === "I Promise!") {
            resolve("You kept the Promise!")
        }
        if (str == null) {
            reject("You have failed me!")
        }
    })
}