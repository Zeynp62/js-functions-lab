/*
Exercise 1: maxOfTwoNumbers()
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))
/*
Exercise 2: isAdult()
*/

const isAdult = (number) => {
  if (number >= 18) {
    return 'Adult'
  } else {
    return 'Minor'
  }
}

console.log('Exercise 2 Result:', isAdult(21))

/*
Exercise 3: isCharAVowel()
*/

const isCharAVowel = (char) => {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return true
  } else {
    return false
  }
}

console.log('Exercise 3 Result:', isCharAVowel('a'))

/*
Exercise 4: generateEmail()
*/

const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

/*
Exercise 5: greetUser()
*/

const greetUser = (name, time) => {
  return `Good ${time}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

/*
Exercise 6: maxOfThree()
*/

const maxOfThree = (num1, num2, num3) => {
  if (num1 >= num2) {
    if (num1 >= num3) return num1
  } else if (num2 > num3) {
    return num2
  } else {
    return num3
  }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

/*
Exercise 7: calculateTip()
*/

const calculateTip = (billAmount, tip) => {
  return billAmount * (tip / 100)
}

console.log('Exercise 7 Result:', calculateTip(50, 20))

/*
Exercise 8: convertTemperature()
*/
const convertTemperature = (temp, char) => {
  if (char === 'F') {
    let value = (5 / 9) * (temp - 32)
    return ` ${value} (Celsius)`
  } else if (char === 'C') {
    let value = (9 / 5) * temp + 32
    return `${value} (Fahrenheit)`
  } else {
    console.log('invalid input')
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

/*
Exercise 9: basicCalculator()
Example: basicCalculator(10, 5, 'subtract') should return 5.
Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2
  } else if (operation === 'subtract') {
    return num1 - num2
  } else if (operation === 'multiply') {
    return num1 * num2
  } else if (operation === 'divide') {
    return num1 / num2
  } else {
    console.log('Invalid operation')
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

/*
Exercise 10: calculateGrade()
Example: calculateGrade(100) should return A.
*/

const calculateGrade = (score) => {
  if (score >= 90 && score <= 100) {
    return 'A'
  } else if (score >= 80 && score <= 89) {
    return 'B'
  } else if (score >= 70 && score <= 79) {
    return 'C'
  } else if (score >= 60 && score <= 69) {
    return 'D'
  } else if (score < 60) {
    return 'F'
  } else {
    console.log('Invalid score')
  }
}

console.log('Exercise 10 Result:', calculateGrade(85))

/*
Exercise 11: createUsername()
Example: createUsername('Samantha', 'Green') should return 'SamGre13'.
*/

const createUsername = (firstName, lastName) => {
  let count = firstName.length + lastName.length
  let theName = firstName.substring(0, 3) + lastName.substring(0, 3)
  let username = `${theName}${count}`
  return username
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))

/*other annswer: 
  
  const createUsername = (firstName, lastName) => {
  let count = firstName.length + lastName.length
  let fName = ''
  let lName = ''
  for (let i = 0; i <= 2; i++) {
    fName += firstName[i]
    lName += lastName[i]
  }
  return fName + lName + count
}*/
