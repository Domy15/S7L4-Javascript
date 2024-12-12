//IXXKMRLxYnyVyn3813UoEnfRhIo2cZQJwQmUL2U790ZGb5zCnxGNqL7v

const url = "https://api.pexels.com/v1/search?query=";
let dataMount;
let dataSun;
let dataValue;
const btnLoad = document.getElementById("btnLoad");
const btnLoad2 = document.getElementById("btnLoad2");
const img = document.querySelectorAll(".card-img-top");
const div = document.querySelectorAll(".col-md-4");
const btnRemove = document.querySelectorAll(".btnRemove");
const mins = document.querySelectorAll(".id");
const form = document.getElementById("form");
const searchBar = document.getElementById("search");

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
        imgNext(data.photos);
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
        imgNext(data.photos);
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

form.addEventListener("submit", function(e) {
    e.preventDefault();
    search(searchBar.value);
});

async function search(value) {
    await fetch(url + value, {
        headers: {
            Authorization: 'IXXKMRLxYnyVyn3813UoEnfRhIo2cZQJwQmUL2U790ZGb5zCnxGNqL7v'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        dataValue = data.photos;
        imgNext(data.photos);
    }).catch((error) => {
        console.log(error);
    });
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", `${dataValue[i].src.medium}`);
        mins[i].innerHTML = `${dataValue[i].id}`;
    };
}

function imgNext(data) {
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", function () {
            sessionStorage.setItem("data", JSON.stringify(data[i]));
            location.href = "img.html";
        });
    }[]
}