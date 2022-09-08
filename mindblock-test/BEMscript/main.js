const ask     = require(`./ask.js`);
const wtf     = require(`./writeToFile.js`);
const cf      = require(`./createFolder.js`);
const scfl    = require(`./setCaseFirstLetter.js`);

let answer = ask(`What would we create: `);

console.log(scfl(answer,'lower'));