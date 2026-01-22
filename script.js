//elemeneti dal dom//
const emailList = document.getElementById('email-list');
const button = docuument.getElementById('generate');
//funzione per svuotare la lista email//
function generateEmails() {
    emailList.innerHTML = '';

//Ciclo FOR per 10 email assegnando le email//
for (let i = 0; i < 10; i++){

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
const email = response.data.response;

const li = document.createElement('li');
li.innerText = email;

emailList.appendChild(li);
});
}
}