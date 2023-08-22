const fibonacci = function(int) {
    if(int<0){
        return "OOPS";
    }
    const sequence = [];
    sequence[0] = 0;
    sequence[1]=1;
    for(let i =2;i<=int;i++){
        sequence[i]=sequence[i-1]+sequence[i-2];
    }
    return sequence[int];

};

// Do not edit below this line
module.exports = fibonacci;
