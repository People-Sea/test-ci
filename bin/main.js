import process from "node:process";

const CHANGE_FILES =  process.env('ALL_CHANGED_FILES');


console.log('以下是debug内容');
console.log(CHANGE_FILES);
console.log(typeof CHANGE_FILES);