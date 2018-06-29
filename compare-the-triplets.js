'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(a, b) {
  //a = a.split(' ');
  //b = b.split(' ');
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore += 1;
    } else if (b[i] > a[i]) {
      bobScore += 1;
    }
  }
    let result = []
    result.push(aliceScore);
    result.push(bobScore);
  return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let result = solve(a, b);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
