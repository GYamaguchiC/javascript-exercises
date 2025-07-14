const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number"){
        return "ERROR"
    }
    if(!Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }

    if(start < 1 || end < 1){
        return "ERROR"
    }

    let sum = 0;

    if( start > end){
        [start, end] = [end, start]
    }

    for(let i = start; i <= end; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
