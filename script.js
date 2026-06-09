<!DOCTYPE html>
<html>
<head>
<title>Car Inventory</title>
</head>
<body>
<h1>Car Inventory Manager</h1>

<input type="text" id="model" placeholder="Car Model">
<input type="number" id="price" placeholder="Price">
<button onclick="addCar()">Add Car</button>

<ul id="carList"></ul>

<script src="script.js"></script>
</body>
</html>
let cars = [];

// 車を追加する
function addCar() {
const model = document.getElementById("model").value;
const price = document.getElementById("price").value;

cars.push({ model, price });

displayCars();
}

// 車一覧を表示する
function displayCars() {
const list = document.getElementById("carList");
list.innerHTML = "";

cars.forEach((car, index) => {
list.innerHTML += `
<li>
${car.model} - ¥${car.price}
<button onclick="deleteCar(${index})">削除</button>
</li>
`;
});
}

// 車を削除する
function deleteCar(index) {
cars.splice(index, 1);
displayCars();
}
