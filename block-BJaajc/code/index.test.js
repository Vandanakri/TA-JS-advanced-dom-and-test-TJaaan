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
  expect(testobj.getFullName("Ashwini" ,"Gupta")).toBe("Ashwini Gupta")
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).toBe("AshwiniGup ta")
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getFullName("Ashwini" ,"Gupta")).toBe("As hwiniGupta")
});




// Positive

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("vav")).toBe(true)
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("mam")).toBe(true)
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("ono")).toBe(true)
});

// Negative

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("vana")).toBe(true)
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("madam")).toBe(true)
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.isPalindrome("one")).toBe(true)
});



// Positive


test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(4)).toBe('The circumference is 25.132741228718345')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(3)).toBe('The circumference is 18.84955592153876')
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(5)).toBe('The circumference is 31.41592653589793')
});


// Negative


test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(3)).toBe('The circumference is 25.132741228718345')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(4)).toBe('The circumference is 18.84955592153876')
});
test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getCircumfrence(2)).toBe('The circumference is 31.41592653589793')
});



// Positive

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(4)).toBe('The area is 50.26548245743669')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(3)).toBe('The area is 28.274333882308138')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(6)).toBe('The area is 113.09733552923255')
});

// Negative

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(3)).toBe('The area is 50.26548245743669')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(4)).toBe('The area is 28.274333882308138')
});

test('adds firstName + lastName to equal fullName', () => {
  expect(testobj.getArea(5)).toBe('The area is 113.09733552923255')
});











