const testobj = require("./index");

// Positive

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).toBe("AshwiniGupta")
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Vandana" ,"Sah")).toBe("VandanaSah")
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Rinki" ,"Sah")).toBe("RinkiSah")
});


// Negative

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).not.toBe("Ashwini Gupta")
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).not.toBe("AshwiniGup ta")
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).not.toBe("As hwiniGupta")
});




// Positive

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("vav")).toBe(true)
});

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("mam")).toBe(true)
});

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("ono")).toBe(true)
});

// Negative

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("vav")).not.toBe(false)
});

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("mam")).not.toBe(false)
});

test('get Palindrome is equal to Palindrome', () => {
  expect(testobj.isPalindrome("ono")).not.toBe(false)
});



// Positive


test('get Circumfrence is equal to Circumfrence ', () => {
  expect(testobj.getCircumfrence(4)).toBe('The circumference is 25.132741228718345')
});

test('get Circumfrence is equal to Circumfrence', () => {
  expect(testobj.getCircumfrence(3)).toBe('The circumference is 18.84955592153876')
});
test('get Circumfrence is equal to Circumfrence', () => {
  expect(testobj.getCircumfrence(5)).toBe('The circumference is 31.41592653589793')
});


// Negative


test('get Circumfrence is equal to Circumfrence', () => {
  expect(testobj.getCircumfrence(3)).not.toBe('The circumference is 25.132741228718345')
});

test('get Circumfrence is equal to Circumfrence', () => {
  expect(testobj.getCircumfrence(4)).not.toBe('The circumference is 18.84955592153876')
});
test('get Circumfrence is equal to Circumfrence', () => {
  expect(testobj.getCircumfrence(2)).not.toBe('The circumference is 31.41592653589793')
});



// Positive

test('get Area is equal to Area', () => {
  expect(testobj.getArea(4)).toBe('The area is 50.26548245743669')
});

test('get Area is equal to Area', () => {
  expect(testobj.getArea(3)).toBe('The area is 28.274333882308138')
});

test('get Area is equal to Area', () => {
  expect(testobj.getArea(6)).toBe('The area is 113.09733552923255')
});

// Negative

test('get Area is equal to Area', () => {
  expect(testobj.getArea(3)).not.toBe('The area is 50.26548245743669')
});

test('get Area is equal to Area', () => {
  expect(testobj.getArea(4)).not.toBe('The area is 28.274333882308138')
});

test('get Area is equal to Area', () => {
  expect(testobj.getArea(5)).not.toBe('The area is 113.09733552923255')
});











