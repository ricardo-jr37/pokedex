const name = document.querySelector("#name")

const ShowData = (result)=>{
	
	for(let campo in result){
		if (document.querySelector("#"+campo)) {
			
			if (campo=="sprites") {
				console.log(campo,result[campo].front_default)
				document.querySelector("#"+campo).value = result[campo].front_default
				document.querySelector("#imagem_pokemon").src = result[campo].front_default
			}
			else{
				console.log(campo,result[campo])
				document.querySelector("#"+campo).value = result[campo]

			}
		}
	}
	//console.log(result.pokemon.name)
	//console.log(result.id)
	//console.log(result.sprites.front_default)
}

name.addEventListener("blur", (e)=>{
	//console.log(name.value);
	//passar alguns parametros
	var pok = name.value.toLowerCase()
	//console.log(pok);
	const options = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'
	}
	fetch(`https://pokeapi.co/api/v2/pokemon-form/${pok}/`,options)
	.then((response)=>{
		response.json()
		.then((data)=>{
			ShowData(data)
		})
	})
	.catch((e)=>{
		console.log("Erro: "+e.message)
	})
})