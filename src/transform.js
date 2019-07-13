module.exports.groupAdultsByAgeRange = function(people) {
    const categoriesByAge = {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
    }

    const categories = people
        .filter(person => person.age >= 18)
        .reduce((categories, person) => {
        
        if (person.age <= 20) {
            categories["20 and younger"].push(person)
            return categories
        }
        else if (21 <= person.age && person.age <= 30) {
            categories["21-30"].push(person)
            return categories
        }
        else if (31 <= person.age && person.age <= 40) {
            categories["31-40"].push(person)
            return categories
        }
        else if (41 <= person.age && person.age <= 50) {
            categories["41-50"].push(person)
            return categories
        }
        else {
            categories["51 and older"].push(person)
            return categories
        }
        
    }, categoriesByAge)
    
    // Clean empty properties
    Object.keys(categories).forEach((key) => (categories[key].length === 0) && delete categories[key])


    // Regular clean function

    // function clean(obj) {
    //     propNames = Object.getOwnPropertyNames(obj)
    //     for (let i = 0; i < propNames.length; i++) {
    //         let propName = propNames[i]
    //         if (obj[propName].length === 0) {
    //             delete obj[propName]
    //         }
    //     }
    // }

    // clean(categories)

    return categories
}