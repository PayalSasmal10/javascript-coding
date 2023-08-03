// how to get all IDs from this object
const obj = {
  id: "1",
  Name: "Payal",
  value: {
    id: "2",
    Obj: {
      id: "3",
    },
  },
  value1: {
    id: "4",
    obj: {
      id: "5",
    },
  },
};

function fetchIds(obj){
    let id = [];
    function extractID(obj){
        for(let key in obj){
            if(key === "id"){
                id.push(obj[key]);
            }else if(typeof obj[key] === 'object'){
                extractID(obj[key]);
            }
        }
    }
    extractID(obj);
    return id;
}

let getData = fetchIds(obj);
console.log(getData);