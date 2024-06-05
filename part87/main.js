const fs = require("fs")
// console.log(fs);

console.log("starting");
fs.writeFileSync("new.txt","this is my txt file")//this is an fs function for making file (i)file name (ii)file content

fs.writeFile("new2.txt","this is my txt file 2", () => {
    console.log("done")
})//this is an fs function for making file (i)file name (ii)file content

console.log("ending")
