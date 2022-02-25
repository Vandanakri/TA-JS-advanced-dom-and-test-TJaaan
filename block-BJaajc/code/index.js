function getFullName(firstName,lastName){
  return firstName + lastName
}

function isPalindrome(userName) {
 let user = userName.split("");
 let arr = user.reverse();
 let result = arr.reduce((acc,elm) => {
  acc += elm;
  return acc;
},'')
return userName === result;
}

function getCircumfrence(radius) {
  return `The circumference is ${2 * Math.PI * radius}`
}

function getArea(radiusOfArea){
 return `The area is ${Math.PI * radiusOfArea * radiusOfArea} `

}



module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
}
