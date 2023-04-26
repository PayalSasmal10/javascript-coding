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

function addData(newdata, callback) {
  setTimeout(() => {
    datas.push(newdata);
    callback();
  }, 2000);
}

addData({ name: "Radha", job: "software developer" }, getData);

