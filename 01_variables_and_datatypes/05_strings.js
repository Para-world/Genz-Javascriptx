

const name = "DEEPAK";
const repoCount = 50;

// -----------------------------------------
// Template Literals (ES2015) — concatenation se better hai


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String Object vs Primitive


const gameName = new String("DEEPAK-hc-com"); // String object (rarely zarurat hoti hai)
console.log("charAt(2):", gameName.charAt(2));     
console.log("indexOf('t'):", gameName.indexOf("t")); 


// Substrings Nikalna


const substring = gameName.substring(0, 4);
console.log("substring(0,4):", substring); 

const sliced = gameName.slice(-8, 4);
console.log("slice(-8, 4):", sliced); 


// Whitespace Hatana


const newStringOne = "   DEEPAK    ";
console.log("Original:", `'${newStringOne}'`);
console.log("trim():", `'${newStringOne.trim()}'`);          
console.log("trimStart():", `'${newStringOne.trimStart()}'`); 
console.log("trimEnd():", `'${newStringOne.trimEnd()}'`);     


// Replace aur ReplaceAll


const url = "https://DEEPAK.com/DEEPAK%20choudhary%20page";

console.log("replace (sirf pehla):", url.replace("%20", "-"));
console.log("replaceAll:", url.replaceAll("%20", "-")); 


// Search Methods



console.log("includes('DEEPAK'):", url.includes("DEEPAK"));     // true
console.log("startsWith('https'):", url.startsWith("https"));   // true (ES2015)
console.log("endsWith('.com'):", gameName.endsWith("com"));     // true (ES2015)

// Split


console.log("split('-'):", gameName.split("-"));


// .at() — Negative Indexing (ES2022)

const greeting = "Hello World";

console.log("First char:", greeting.at(0));   // "H"
console.log("Last char:", greeting.at(-1));   // "d" — greeting[greeting.length - 1] se clean hai
console.log("2nd last:", greeting.at(-2));    // "l"



const cardNumber = "4532";

console.log("padStart:", cardNumber.padStart(16, "*")); // "************4532"
console.log("padEnd:", cardNumber.padEnd(16, "*"));     // "4532************"


// Tagged Template Literals (Advanced)


const highlight = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
        return `${result}${str}${values[i] ? `[${values[i]}]` : ""}`;
    }, "");
};

const language = "JavaScript";
const year = 2024;
console.log("\n--- Tagged Template ---");
console.log(highlight`Learning ${language} in ${year}`);
// "Learning [JavaScript] in [2024]"