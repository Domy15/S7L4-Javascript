//IXXKMRLxYnyVyn3813UoEnfRhIo2cZQJwQmUL2U790ZGb5zCnxGNqL7v

const url = "https://api.pexels.com/v1/search?query=";
let dataMount;
let dataSun;
const btnLoad = document.getElementById("btnLoad");
const btnLoad2 = document.getElementById("btnLoad2");
const img = document.querySelectorAll(".card-img-top");
const div = document.querySelectorAll(".col-md-4");
const btnRemove = document.querySelectorAll(".btnRemove");
const mins = document.querySelectorAll(".id");

document.addEventListener("load", init());

function init() {
   getData();
   getData2();
   remove();
}

async function getData() {
    await fetch(url + "mountains", {
        headers: {
            Authorization: 'IXXKMRLxYnyVyn3813UoEnfRhIo2cZQJwQmUL2U790ZGb5zCnxGNqL7v'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        dataMount = data.photos;
        console.log(dataMount);
    }).catch((error) => {
        console.log(error);
    });
}

async function getData2() {
    await fetch(url + "sunRise", {
        headers: {
            Authorization: 'IXXKMRLxYnyVyn3813UoEnfRhIo2cZQJwQmUL2U790ZGb5zCnxGNqL7v'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        dataSun = data.photos;
        console.log(dataSun);       
    }).catch((error) => {
        console.log(error);
    });
}

btnLoad.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", `${dataMount[i].src.medium}`);
        mins[i].innerHTML = `${dataMount[i].id}`;
    };
});

btnLoad2.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", `${dataSun[i].src.medium}`);
        mins[i].innerHTML = `${dataSun[i].id}`;
    };
});

function remove() {
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function() {
            div[i].style.display = "none";
        })
    }
}