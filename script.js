//Stampa di una mail in pagina tramite il DOM (in questo caso un "li" vuoto quindi un punto)//
const emailList = document.getElementById('email-list');

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
const email = response.data.response;

const li = document.createElement('li');
li.innerText == email;

emailList.appendChild(li);
});
