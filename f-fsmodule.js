const { readFileSync, writeFileSync } = require("fs");

// get existing file value
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

// will create or override file
writeFileSync(
  "./content/result-sync.text",
  `this is result file the other is filename with a value of: ${first} (and) ${second}`,
  { flag: "a" }
);
