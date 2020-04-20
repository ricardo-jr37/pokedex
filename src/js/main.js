const name = document.querySelector("#name")


const ShowData = (result)=>{
	var ataques = result.moves
	document.querySelector("#moves").textContent ="Ataques: ";
	for(let campo in result){
		if (document.querySelector("#"+campo)) {
			if (campo=="sprites") {
				//console.log(campo,result[campo].front_default)
				document.querySelector("#"+campo).value = result[campo].front_default
				document.querySelector("#imagem_pokemon").src = result[campo].front_default
			}
			if (campo=="id") {
				//console.log(campo,result[campo])
				document.querySelector("#"+campo).textContent = "ID: "+result[campo]
			}
		}
	}
	//console.log(ataques.length)
	for(let i in ataques){
		if (i == ataques.length-1) document.querySelector("#moves").textContent += ataques[i].move.name;
		else document.querySelector("#moves").textContent += ataques[i].move.name +", ";
	}

	//console.log(result.pokemon.name)
	//console.log(result.moves)
	//console.log(result.sprites.front_default)
}
document.querySelector("#btt").addEventListener("click", (e)=>{
	//console.log(name.value);
	//passar alguns parametros
	var pok = name.value.toLowerCase()
	//console.log(pok);
	const options = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'
	}
	fetch(`https://pokeapi.co/api/v2/pokemon/${pok}/`,options)
	.then((response)=>{
		if (!response.ok) {
			throw Error(response.statusText)
		}
		response.json()
		.then((data)=>{
			ShowData(data)
			//console.log(data)
			var ataques = data.moves

			for(let teste in ataques){
				//console.log(teste,ataques[teste].move.name)
			}
			
		})
	})
	.catch((e)=>{
		console.log("Erro: "+ e.statusText)
		document.querySelector("#id").textContent = "Pokemon não encontrado"
		document.querySelector("#imagem_pokemon").src = "";
		document.querySelector("#moves").textContent ="";
	})
})
