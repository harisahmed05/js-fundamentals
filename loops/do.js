import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

let yourName;
do {
    yourName = await rl.question('What is your name? ');
} while(!yourName);
console.log("Hello " + yourName);

rl.close();
