window.addEventListener("load", Init);

function Init() {
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);

    let nextBtn = document.querySelector(".next");//доступ до кнопки некст
    nextBtn.addEventListener("click", Next);
    let prevBtn = document.querySelector(".prev");//доступ до кнопки prev
    prevBtn.addEventListener("click", Prev);
    let planetsBtn = document.querySelector(".planets");//доступ до кнопки planets
    planetsBtn.addEventListener("click", reqPlanet);
    let personsBtn = document.querySelector(".people");//доступ до кнопки people
    personsBtn.addEventListener("click", reqPeople);
}

function Next(){
    console.log("Next", state);
    let newUrl = state.next;
    let newData = state.data;
    Request(newUrl, newData);
}

function Prev(){
    console.log("Prev", state);
    let newUrl = state.prev;
    let newData = state.data;
    Request(newUrl, newData);
}

function reqPlanet(){
    let url = "https://swapi.co/api/planets/";
    Request(url, GetPlanet);
}

function reqPeople(){
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);
}

function Request(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            let data = JSON.parse(xhr.responseText);
            console.log("data==>", data)
            callback(data); //викликається GetPerson, GetPlanet(в залежності від того яку функцію прокидаємо в параметрі функції Request)
        }
    };
}

function GetPerson(persons) {
    console.log(persons.results);
    state.next = persons.next;
    state.prev = persons.previous;
    state.data = GetPerson;
    let countOfPerson = document.querySelector(".count");
    countOfPerson.textContent = `10 of ${persons.count}`;

    let root = document.querySelector("#root");
    let tbody = document.createElement("tbody");
    tbody.setAttribute("class", "table table-inbox table-hover");
    root.innerHTML = "";
    root.appendChild(tbody);

    for (let i = 0; i < persons.results.length; i++) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = persons.results[i].name;
        tdName.style.textAlign = "left";
        let tdBirthYear = document.createElement("td");
        tdBirthYear.textContent = persons.results[i].birth_year;
        let tdGender = document.createElement("td");
        tdGender.textContent = persons.results[i].gender;
        tr.appendChild(tdName);
        tr.appendChild(tdBirthYear);
        tr.appendChild(tdGender);
        tbody.appendChild(tr);
        console.log(persons.results[i].name);
        console.log(persons.results[i].birth_year);
        console.log(persons.results[i].gender);
        console.log("--------------------------------");
    }
}

function GetPlanet(planets) {
    console.log("planets==>", planets);
    state.next = planets.next;
    state.prev = planets.previous;
    state.data = GetPlanet;
    let countOfPlanet = document.querySelector(".count");
    countOfPlanet.textContent = `10 of ${planets.count}`;

    let root = document.querySelector("#root");
    let tbody = document.createElement("tbody");
    tbody.setAttribute("class", "table table-inbox table-hover");
    root.innerHTML = "";
    root.appendChild(tbody);

    for (let i = 0; i < planets.results.length; i++) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = planets.results[i].name;
        tdName.style.textAlign = "left";
        let tdClimate = document.createElement("td");
        tdClimate.textContent = planets.results[i].climate;
        let tdPopulation = document.createElement("td");
        tdPopulation.textContent = planets.results[i].population;
        tr.appendChild(tdName);
        tr.appendChild(tdClimate);
        tr.appendChild(tdPopulation);
        tbody.appendChild(tr);
        console.log(planets.results[i].name);
        console.log(planets.results[i].climate);
        console.log(planets.results[i].population);
        console.log("--------------------------------");
    }
}

let state = {
    next: "",
    prev: ""
}


// Test2();

// const Test2 = function(){
// console.log("Test2");
// }



// Test();

// function Test(){
// console.log("Test");
// }



// let a = 10;
// let b = 130;
// Init = (a , b) =>{
// return a + b;
// }


// const res = Init(a, b);
// console.log(res);



// let Person = {
// name : "Bill",
// surname: "Gates",
// age: 58,
// data: {
// day: 23,
// month: 10,
// year: 1956
// }
// }


// console.log(Person.name);
// console.log(Person.age);

// let day = Person.data.day;


// console.log("Day:", day);

// console.log(Person.data);


// let arr = [4,6,"Tom",[8678,3453,"Test"]];

// console.log(arr);


// let arrPerson = [Person,Person];
// console.log(arrPerson);