import process from "node:process";

const ALL_CHANGED_FILES =  process.env['ALL_CHANGED_FILES']?.split("\n") || [];


console.log('以下是debug内容');
console.log(ALL_CHANGED_FILES);
console.log(typeof ALL_CHANGED_FILES);