let datas = [
  { name: "payal", job: "software developer" },
  { name: "oli", job: "software developer" },
];

function getData() {
  let output = "";
  setTimeout(() => {
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addData(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = true;
      if(!error){
        resolve();
      }else{
        reject("promise got rejected, please check it");
      }
    }, 2000);
  });
}

addData({ name: "Radha", job: "software developer" }).then(getData).catch((err) => { console.log(err)});
