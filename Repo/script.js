// Mostra data e hora atuais no carregamento
const dtEl = document.getElementById('datetime');
function updateDateTime(){
const now = new Date();
dtEl.textContent = `Data e hora local: ${now.toLocaleString()}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);


// Calcula 2+2 e mostra
document.getElementById('calc').addEventListener('click', ()=>{
const result = 2 + 2;
document.getElementById('result').textContent = `2 + 2 = ${result}`;
});