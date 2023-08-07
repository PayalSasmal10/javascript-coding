// flatendObject
const obj = {
    a: "2",
    p: {
      c: [2],
      d: "abc"
    },
    e: "10"
  };
  // {a:2, c: "2", d:"abc", e: "10"}

  function flattendObjects(obj){
    let flattedObj = {};
    function extractFlattendData(obj){
        for(let key in obj){
            console.log(key);
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                extractFlattendData(obj[key]);
            }else{
                flattedObj[key] = obj[key];
            }
        }
    }
    extractFlattendData(obj);
    return flattedObj;
  }
  let getObj = flattendObjects(obj);
  console.log(getObj);