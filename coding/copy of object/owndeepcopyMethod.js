const obj1 = { a: 1, b: 2, c: 3, d: { e: 4, f: 5, g: { h: 6 } } };

function deepCopy(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    const newObj = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepCopy(obj[key]);
        }
    }
}