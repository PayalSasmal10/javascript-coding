const arr = [3, 4, 90, 2, 1, 10];
const mapArr = arr.map((a) => a * 2);
console.log(mapArr);

function custArrMap(arr, callbackFn){
    let mapArr = [];
    for(let i =0; i<arr.length; i++){
        let result = callbackFn(arr[i]);
        mapArr.push(result);
    }
    return mapArr;
}

const custMap = custArrMap(arr, (a)=> a* 2);
console.log(custMap);

const filterArr = arr.filter((a) => a%2 === 0);
console.log(filterArr);

function custArrFilter(arr, callbackFn){
    let filtArr = [];
    for(let i= 0; i< arr.length; i++){
        let result = callbackFn(arr[i]);
        if(result){
            filtArr.push(arr[i])
        }
    }
    return filtArr;
}

const custFilter = custArrFilter(arr, (a) => a%2 === 0);
console.log(custFilter);

const reduceArr = arr.reduce((initialV=0, a) => initialV+a);
console.log(reduceArr);

function custArrReduce(initialV, arr, callBackfn){
    let initV = initialV;
    for(let i =0; i< arr.length; i++){
        initV = callBackfn(initV, arr[i]);
    }
    return initV;
}

const custReduce = custArrReduce(0, arr, (initialV, a) => initialV + a);
console.log(custReduce);