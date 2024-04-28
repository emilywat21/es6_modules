console.log("Hello World");

import {WishList} from './wishlist.js';

let wishListForm = document.getElementById("submitForm");
let carMake = document.querySelector("#makeInput");
let carModel = document.querySelector("#modelInput");
let carYear = document.querySelector("#yearInput");
let makeP = document.getElementById("car-make");
let modelP = document.getElementById("car-model");
let yearP = document.getElementById("car-year");
let removeBtn = document.querySelector("#removeBtn");
let wishListUl = document.querySelector("#wishListContainer > ul");

let wishList = new WishList();

function showCarDetails(car){
makeP.textContent = car.make;
modelP.textContent = car.model;
yearP.textContent = car.year;
removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList(){
    wishListUl.innerHTML = "";

    wishList.list.forEach((car) => {
       const li = document.createElement("li");
            li.textContent = `${car.make} ${car.model}`;
            li.addEventListener("click", () => showCarDetails(car));
            li.addEventListener("click", () => showCarDetails(car));
            wishlistUl.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wishList.add(make, model, year);

    updateDOMList();
}

function removeCar() {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
  
    updateDOMList();

  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}