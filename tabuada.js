document.getElementById('Num').focus()
	
//Função para gerar Tabuada
function ShowTabuada(){
	let NumInsert = (document.getElementById('Num').value)
	let Tabuada = document.getElementById('list-container')
	let Multi = 1

	if(NumInsert.length == 0){
		alert('[ERRO] Insira um valor') //tratamento de erros
		Tabuada.innerHTML = `Não foi possivel calcular :/`
	}else{
		document.getElementById('list-container').innerText = ` ` //Limpa a operação anetrior

		for(Multi;Multi<=10;Multi++){
			Tabuada.innerHTML += `${NumInsert} X ${Multi} = ${NumInsert*Multi} <br>`
			
			//estilo da Tabuada

			Tabuada.style.border = 'black 2px solid'
			Tabuada.style.borderRadius = '0.5em'
		}
	}
}	

//Caso o usuario apertar a tecla Enter, a função "ShowTabuada()" Será acionada
addEventListener('keydown',()=>{
	if(event.key == 'Enter'){
		return ShowTabuada()
	}
})
	
//Função Para Limpar a tabela	
function ClearTabuada(){
	alert('Dados Apagados')

	const lista = document.getElementById('list-container')
	const input = document.getElementById('Num')
	
	lista.innerText = ` `
	lista.style.backgroundColor = 'rgba(255, 255, 255, 0.001)' 
	lista.style.border = 'none'					//Limpa os resultados
	input.value = ` ` 
	input.focus()	
}