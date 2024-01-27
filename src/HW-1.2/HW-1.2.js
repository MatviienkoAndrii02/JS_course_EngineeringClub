function canSmoke(age) {
    if (age >= 18) {
        return true
    }
    return false
}

let canSmokeVariable = function (age) {
    if (age >= 18) {
        return true
    }
    return false
}

let canSmokeArrow = (age) => {
    if (age >= 18) {
        return true
    }
    return false
}

function allowedTOIn(name, age, department) {
    if (name == 'Andrii' && age >= 18 && department == 'QA') {
        return true
    }
    return false
}

console.log(canSmoke(14))
console.log(canSmoke(20))
console.log(canSmokeVariable(14))
console.log(canSmokeVariable(20))
console.log(canSmokeArrow(14))
console.log(canSmokeArrow(20))
console.log(allowedTOIn("John", 17, "PM"))
console.log(allowedTOIn("Andrii", 21, 'QA'))


