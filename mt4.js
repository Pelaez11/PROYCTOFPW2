const car = [];

frut = prompt("¿Quieres agregar alguna fruta?");
car.push(frut);

while (confirm("¿Otra fruta a agregar?")){
	frut = prompt("Ingresa el nombre de la fruta");
	car.push(frut);
}

for (let i of car){
	console.log(i);
}
