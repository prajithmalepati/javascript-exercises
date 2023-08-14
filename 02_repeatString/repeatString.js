const repeatString = function(word, times) {
    if(times<0){
        return "ERROR"
    }
    let newWord="";
    for(let i =0;i<times;i++){
        newWord+=word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
