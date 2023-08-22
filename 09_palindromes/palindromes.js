const palindromes = function (line) {
    let newLine = line.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedLine = newLine.split("").reverse().join("");
    return newLine==reversedLine;
  };


// Do not edit below this line
module.exports = palindromes;
