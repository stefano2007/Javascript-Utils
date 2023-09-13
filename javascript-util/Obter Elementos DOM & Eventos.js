Javascript
//Obter elemento

const elementoquerySelector = document.querySelector('#filtro');//primeiro que achar
const elementoquerySelectorAll = document.querySelectorAll('#filtro');//lista de elementos com id filtro
const elementoquerySelectorByName = document.querySelector('[name="filtro"]'); //obter por atributo nome igual a "filtro"
const elementogetElementById = document.getElementById('filtro');//obter por id
const elementogetElementByName = document.getElementsByName('filtro');//lista por nome

//evento

elementoquerySelector.addEventListener('click', (event) => console.log('click')); // evento click
elementoquerySelector.addEventListener('change', (event) => console.log(event.target.value)); // evento change


JQuery
//Obter Elemento
$('#filtro')[0] //primeiro que achar
$('#filtro') //lista de elementos com id filtro
$('[name="filtro"]'); //obter por atributo nome igual a "filtro"

//evento
elementoquerySelector.on('click', (event) => console.log('click'));
elementoquerySelector.on('change', (event) => console.log(event.target.value));
$( "form" ).on( "submit", false );

$( "body" ).on( "click", "p", function() {
  $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});


Cancelar evento padrão (ex. submit)

event.preventDefault();