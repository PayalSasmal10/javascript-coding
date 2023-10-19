let url = "https://api.publicapis.org/entries";

async function GetData(url){

    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
}
GetData(url);

function getData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getData(url);