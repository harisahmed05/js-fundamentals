let n = 8;
for(let i = 1; i <= n; i++) {
    let str = "";
    if(i%2 == 0) {
        for(let j = 1; j <= n; j++) {
            if(j%2 == 0) str += ' ';
            else str += '#';
        }
    }
    else {
        for(let j = 1; j <= n; j++) {
            if(j%2 == 0) str += '#';
            else str += ' ';
        }
    }
    console.log(str);
}
