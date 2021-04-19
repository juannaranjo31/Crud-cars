'use strict';

const cars = [
    {
        brand: 'McLaren',
        model: '720S',
        color: 'Anaranjado',
        year: 2019,
        price: 300000,
        photo: 'https://www.autobild.es/sites/autobild.es/public/dc/fotos/McLaren-720S-2018-C01.jpg'
    },
    
    {
        brand: 'Bugatti',
        model: 'Divo',
        color: 'Negro Metalico',
        year: 2020,
        price: 5000000,
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Bugatti-Divo-2019-C01.jpg?itok=ZdnNuiy7'
    },

    {
        brand: 'Ferrai',
        model: 'F12 Berlinetta',
        color: 'Rojo Clasico',
        year: 2017,
        price: 216000,
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Ferrari-F12berlinetta_2013_01.jpg?itok=Ez6taqBQ'
    },

    {
        brand: 'Maserati',
        model: 'GranCabrio',
        color: 'Rojo',
        year: 2018,
        price: 120000,
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Maserati-GranCabrio_2012_01.jpg?itok=zC-Ak5Kb'
    }
];

/*
    Show Cars
*/
const cars_container = document.getElementById('cars-container');
ShowCars();

/*
    Inputs
*/
const brand_input = document.getElementById('brand');
const model_input = document.getElementById('model');
const color_input = document.getElementById('color');
const year_input = document.getElementById('year');
const price_input = document.getElementById('price');
const photo_input = document.getElementById('photo');
const create_btn = document.getElementById('create');
const update_btn = document.getElementById('update');
const cancel_btn = document.getElementById('cancel');
let updateIndex;

/*
    Exceptions
*/
create_btn.addEventListener("click", function (event) {
    event.preventDefault();
})

/*functions*/

function ShowCars() {
    cars_container.innerHTML = '';
    for (let i = 0; i < cars.length; i++) {
        cars_container.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="img-container">
        <img src="${cars[i].photo}"
          class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <table>
            <tr>
              <td>Marca:</td>
              <td>${cars[i].brand}</td>
            </tr>

            <tr>
              <td>Modelo:</td>
              <td>${cars[i].model}</td>
            </tr>

            <tr>
              <td>Color:</td>
              <td>${cars[i].color}</td>
            </tr>

            <tr>
              <td>Año:</td>
              <td>${cars[i].year}</td>
            </tr>
          </table>

          <div class="price">
            <h5>${cars[i].price} USD</h5>
          </div>

          <div class="actions">
            <button type="button" class="btn btn-primary" name="${i}" onclick="UpdateCatch(${i});"><i class="far fa-edit"></i></button>
            <button type="button" class="btn btn-danger" name="${i}" id="delete-btn" onclick="DeleteCar(${i});"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>`;
    }
}

function ShowUpdatesBtn() {
    create_btn.classList.toggle('d-none');
    update_btn.classList.remove('d-none');
    cancel_btn.classList.remove('d-none');
}

function ShowCreateBtn() {
    create_btn.classList.remove('d-none');
    update_btn.classList.toggle('d-none');
    cancel_btn.classList.toggle('d-none');
}

function CleanInputs() {
    brand_input.value = '';
    model_input.value = '';
    color_input.value = '';
    year_input.value = '';
    price_input.value = '';
    photo_input.value = '';
}

function CreateCar() {
    if (brand_input.value != '' && model_input.value != '' && color_input.value != '' && year_input.value != '' && price_input.value != '' && photo_input.value != '') {
        cars.push(
            {
                brand: brand_input.value,
                model: model_input.value,
                color: color_input.value,
                year: parseInt(year_input.value),
                price: parseInt(price_input.value),
                photo: photo_input.value
            }
        );
    
        CleanInputs();
        ShowCars();
    }else{
        alert('Es necesario llenar todos los campos');
    }
}

function UpdateCatch(index) {
    updateIndex = index;
    ShowUpdatesBtn();
    brand_input.value = cars[index].brand;
    model_input.value = cars[index].model;
    color_input.value = cars[index].color;
    year_input.value = cars[index].year;
    price_input.value = cars[index].price;
    photo_input.value = cars[index].photo;
}

function UpdateCar() {
    cars[updateIndex].brand = brand_input.value;
    cars[updateIndex].model = model_input.value;
    cars[updateIndex].color = color_input.value;
    cars[updateIndex].year = year_input.value;
    cars[updateIndex].price = price_input.value;
    cars[updateIndex].photo = photo_input.value;
    CleanInputs();
    ShowCars();
    ShowCreateBtn();
    alert('Actualización exitosa');
}

function DeleteCar(index) {
    cars.splice(index, 1);
    CleanInputs();
    ShowCars();
    alert('Haz eliminado un vehiculo');
}