//Array

const dados = [{codigo: 1, nome: 'teste', valor: 120}, {codigo: 2, nome: 'teste 2', valor: 30}];

//filtra o array e retorna um outro array 
dados.filter((item) => { return item.codigo == 1 });
//result: [{codigo: 1, nome: 'teste'}]

//filtrar primeiro objeto que achar
dados.find(item => item.nome.startsWith('teste'));
//result: {codigo: 1, nome: 'teste', valor: 120}


//transforma o array 
dados.map((item) => { return item.codigo == 1 })
//retult: [true, false]

//interação cada linha 
dados.forEach((item) => { console.log('item', item) })


//reduce reduz o array em um valor
const initialValue = 0;
dados.map(item => item.valor)
	.reduce((accumulator, currentValue) => accumulator + currentValue,
	  initialValue
	);
	
	
//retorna um novo array até determinado index (Ex. pode ser usado com paginação)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
//retult: Array ["camel", "duck", "elephant"]


// incluir algo em uma deterinada posição (exemplo stuff sql)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
//result: ["Jan", "Feb", "March", "April", "June"]
