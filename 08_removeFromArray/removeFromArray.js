const removeFromArray = function(arr, ...elements) {
    elements.forEach((n) => {
        for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if( item === n){
            arr.splice(i, 1);
            i--;
        }
    }})
    

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
