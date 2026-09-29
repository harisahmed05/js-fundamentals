let taka = "৳"; // => 1: this characcter has one 16-bit element
let love = "❤️"; // => 2: UFT-16 encoding of ❤️ is "\ud83d\udc99"

console.log(taka.length);
console.log(love.length);

console.log('name="myform"');
console.log(`"She said 'hi'", he said`);
console.log('two\nlines');
console.log("one\
long\
line");
console.log(`the newline character at the end of this line
is included literally in this string`);
console.log('You\'re right, it can\'t be a quote');
