const btnSalvar = document.getElementById('save');

btnSalvar.addEventListener('click', function (){
   console.log('click', db == undefined);

   let username = document.querySelector('#inputUsername')?.value;
   let name = document.querySelector('#inputName')?.value;
   let location = document.querySelector('#inputLocation')?.value;
   let description = document.querySelector('#inputDescription')?.value;

   const data = { username, name, location, description };

   //console.log('data', data);
   saveUser(data);
});


