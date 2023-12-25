const arr = [23, 43, 54, 12, 98, 12];
// console.log(arr.flat(-1));
function sortArr(arr) {
  let newArr = arr.sort((a,b) => a-b);
  return newArr;
}
let newData = sortArr(arr);
console.log(sortArr(arr));
console.log(arr);
console.log(newData.at(-1));
console.log(arr[newData.length - 1]);

// function createSetTimeOut(){
//     let timeID=0;
//     let timeMap = {};

//     function setTimePoly(callBackFn, delay){
//         var id = timeID++;
//         timeMap[id] = true;
//         var start = Date.now();
//         function triggerCallBack(){
//             if(!timeMap[id]) return;
//             if(Date.now() > start + delay){
//                 callBackFn();
//             }
//             else{
//                 requestIdleCallback(triggerCallBack);
//             }

//         }
//         requestIdleCallback(triggerCallBack);
//         return id;
//     }

//     function clearTimePoly(id){
//         return timeMap[id];
//     }
//     return {setTimePoly, clearTimePoly}
// }

// var {setTimePoly, clearTimePoly} = createSetTimeOut();
// console.log("start");
// var myId = setTimePoly(function(){
//     console.log("test");
// }, 1000);

// console.log(myId);
// console.log("End");