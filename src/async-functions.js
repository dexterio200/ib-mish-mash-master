const fetch = require("node-fetch")

module.exports.getTatooineResidents = function() {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.co/api/planets/1/")
            .then(response => response.json())
            .then(myJson => resolve(myJson.residents))
            .catch(err => reject(err))
    })
}

module.exports.promiseMeAString = function(input) {
    return new Promise((resolve, reject) => {
        if (!input) {
            reject("You have failed me!")
        }
        else {
            resolve("You kept the Promise!")
        }
    })
}