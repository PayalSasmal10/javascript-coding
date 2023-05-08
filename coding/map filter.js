let arr = [1, 2, 3, 4, 5];

// using map function
/*let square = arr.map(currentItems => currentItems ** 2);
console.log(square);*/

// creating own map

function customMap(arr, callbackFunc){
    let mapArr = [];
    for(let i=0; i<arr.length; i++){
        const result = callbackFunc(arr[i]);
        mapArr.push(result);
    }

    return mapArr;

}

let square = customMap(arr, function(currentItem) { 
    return currentItem ** 2
});

console.log(square);

