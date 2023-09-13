//$.get
const urlGet = ''

$.get(urlGet)
	.then((resposta) => {
		console.log(resposta)
	});
	
//$.post
const urlPost = ''
const dados = { codigo: 1, nome: 'teste' };
$.post(urlPost, dados)
	.then((resposta) => {
		console.log(resposta)
	});