let datas = [
  { name: "payal", job: "software engineer" },
  { name: "oli", job: "software engineer" },
];

function getData() {
  let output = "";
  setTimeout(() => {
    datas.map((data) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addData(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if(!error){
        resolve();
      }else{
        reject("There is some issue to add the data");
      }

    }, 2000);
  });
}

async function start() {
  await addData({ name: "Radha", job: "Software Engineer" });
  getData();
}

start();
