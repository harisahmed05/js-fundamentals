let billion = 1_000_000_000; // -2^53 to 2^53 => allowed by the number type
let bytes = 0x89_AB_CD_EF;
let bits = 0b0001_1101_0111;
let fraction = 0.123_456_789;

console.log(billion);
console.log(bytes);
console.log(bits);
console.log(fraction);

console.log(Math.pow(2, 53)); 
// Math.sqrt(), Math.floor(), Math.max(), Math.min(), Math.E, 
// Math.random(), Math.PI, Math.log(10), Math.log(100)/Math.LN10 etc. exists


console.log(Infinity) // a postive number too big to represent
console.log(Number.POSITIVE_INFINITY);
console.log(1/0);
console.log(Number.MAX_VALUE * 2);

console.log(-Infinity) // a negative number too big to represent
console.log(Number.NEGATIVE_INFINITY);
console.log(-1/0);
console.log(-Number.MAX_VALUE * 2);

console.log(NaN) // not-a-number = 0/0 = Infinity/Infinity


let zero = 0;
let negz = -0;
console.log(zero == negz) // => true
console.log(1/zero == 1/negz) // => false, Infinity and -Infinity not equal


console.log(BigInt(Number.MAX_SAFE_INTEGER)); // => 9007199254740991n, BigInt literals contain a lowercase n at the end
let string = "1" + "0".repeat(100);
console.log(BigInt(string));
