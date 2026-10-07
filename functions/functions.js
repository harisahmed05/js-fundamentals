// Defining a Function
const halve = function(n) {
    return n/2;
};

const square = function(x) {
    return x*x;
};

let n = 10;
console.log(halve(100));
console.log(square(12));

// Nested Scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(2, "tablespoon", "olive oil"); // lazy to write more ingredients to make tasty hummus:(
};
hummus(5);

// Functions as values
let safeMode = true;
let launchMissiles = function() {
    console.log("Launching Missiles");
};
if(safeMode) {
    launchMissiles = function() { /* do nothing */ };
}
launchMissiles();

// Declaration Notation
console.log("The future says: ", future());
function future(){
    return "You'll never have flying cars";
} // order doesn't matter and no semicolon after function declaration

// Arrow Functions
const square1 = (x) => {return x*x;};
const square2 = x => x*x;

// Optional Arguments
function minus(a, b) { // writing b=0, makes it not undefined
    if(b == undefined) return -a;
    else return a-b;
}

console.log(minus(10)); // too few parameters, the rest are undefined, you can never know the right number of arguments
console.log(minus(10, 5));

