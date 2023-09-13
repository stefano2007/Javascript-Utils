javascript

//popular select option
const dados = [{codigo: 1, nome: 'teste', valor: 120}, {codigo: 2, nome: 'teste 2', valor: 30}];

const selectOption = document.querySelector('select')

dados.forEach((data) => {
	const opt = document.createElement('option');
	opt.value = data.codigo;
	opt.innerHTML = data.nome;
	selectOption.appendChild(opt);
});

//limpar combo
selectOption.innerHTML = '';

//obter primeiro selecionado 
let value = selectOption.options[selectOption.selectedIndex]?.value

//obter todos selecionados
let values = Array.from(selectOption.options)
				.filter((item) => { return item.selected })
				.map(item => item.value);
				
//selecionar option por value 
let valueSelect = '0'

Array.from(selectOption.options)
    .filter((item) => { return item.value == valueSelect })
    .forEach(item => item.selected = true)

//selecionar option por index 
selectOption.options[0].selected = true				
				
// JQuery //

//obter todos selecionados
$('#ddlSituacoes').val()

//selecionar option por value 
$('#ddlSituacoes').val('2')

//selecionar option por index 
$('#ddlSituacoes > option')[0].selected = true