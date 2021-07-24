document.getElementById('Num').focus()
	
function Tbd(){
		let NumInsert = (document.getElementById('Num').value)
		let Tabuada = document.getElementById('list-container')
		let Multi = 1

		if(NumInsert.length == 0){
			alert('[ERRO] Insira um valor') //tratamento de erros
		}else{

			for(var i = Multi; i <= 10; i++){
				
				Tabuada.innerHTML += `${NumInsert} X ${i} = ${NumInsert*i}<br>`
				
				Tabuada.style.backgroundColor = 'white'
				Tabuada.style.border = 'solid 2px' 
				Tabuada.style.marginLeft = '90px'					//estilo da tabuada
				Tabuada.style.marginRight = '90px'
				Tabuada.style.paddingBottom = '100px'
				Tabuada.style.padding = '8px'
		
			}

		}	
}
function m(){
	alert('Dados Apagados')
	document.getElementById('list-container').innerText = ` `
	document.getElementById('list-container').style.backgroundColor = 'rgba(255, 255, 255, 0.001)' 
	document.getElementById('list-container').style.border = 'none'					//Limpa os resultados
	document.getElementById('Num').value = ` ` 
	document.getElementById('Num').focus()	
}