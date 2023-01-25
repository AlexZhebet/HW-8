// // №1 
let arrayNumb = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
let arrayNew = arrayNumb.filter((el) => {
    if (el > 0) {
        return el
    }
})
// console.log(arrayNew) 
let sum = arrayNew.reduce((accum, item) => accum + item, 0)
console.log(`№1 сума позитивних елементів ${sum} кількість ${arrayNew.length}`)

// // №2 
let minNumber = arrayNumb[0]
for (let i = 0; i < arrayNumb.length; i++) {
    if (minNumber > arrayNumb[i]) {
        minNumber = arrayNumb[i]
    }
}
console.log(`№2 мінімальне число ${minNumber} порядковий номер ${arrayNumb.indexOf(minNumber)}`)

// // let minNum1 = Math.min(...arrayNumb) 
// // console.log(`мінімальне число ${minNum1} порядковий номер ${arrayNumb.indexOf(minNum1)}`) 

// // №3 

let maxNumber = arrayNumb[0]
arrayNumb.forEach((el) => {
    if (maxNumber < el) {
        maxNumber = el
    }
})
console.log(`№3 максимальне число ${maxNumber} порядковий номер ${arrayNumb.indexOf(maxNumber)}`)

// // let maxNumb1 = Math.max(...arrayNumb) 
// // console.log(`максимальне число ${maxNumb1} порядковий номер ${arrayNumb.indexOf(maxNumb1)}`) 


// // №4 

let negativeEl = arrayNumb.filter((el) => {
    if (el < 0) {
        return el
    }
})
console.log(`№4 негативних елементі ${negativeEl.length} елементи: ${negativeEl}`)

// // №5 
let couplesEl = arrayNumb.filter((el, i, arrNew) => {
    if (el > 0) {
        return arrNew.indexOf(el) !== i
    }
})
// console.log(couplesEl) 

let oddEl = arrayNumb.filter((el) => {
    if (el > 0) {
        return couplesEl.indexOf(el) < 0
    }
})
console.log(`№5 ${oddEl.length} непарних позитивних елементів, елементи ${oddEl}`)
// // №6 
let couplesEl1 = arrayNumb.filter((el, i, arrNew) => {
    if (el > 0) {
        return arrNew.indexOf(el) !== i
    }
})
console.log(`№6 ${couplesEl1.length} парних позитивних елементів, елементи ${couplesEl1}`)

// // №7 
let sum1 = couplesEl1.reduce((accum, item) => accum + item, 0)
console.log(`№7 ${sum1} сума парних позитивних елементів.`)

// // №8 
let sumOdd = oddEl.reduce((accum, item) => accum + item, 0)
console.log(`№8 ${sumOdd} сума непарних  позитивних елементів.`)

// // №9 
let product = arrayNew.reduce((accum, item) => accum * item, 1)
console.log(`№9 ${product} добуток позитивних елементів`)

// // №10 

let nullArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let maxElArray = Math.max(...nullArray)
// console.log(maxElArray) 

nullArray.forEach((el, index) => {
    if (el === maxElArray) {
        nullArray[index] = el
    } else {
        nullArray[index] = 0
    }
})

console.log(`№10 :  ${nullArray}`)