const card0 = document.getElementById("card0");
const card1 = document.getElementById("card1");
const linkedin = document.getElementById("in");



/*function showCard(e){
    e.preventDefault();
    card0.style.color = "blue";
}
card0.addEventListener('click', showCard);*/

function card(x){
    x.style.fontSize = 'x-large'
}
function cardx(x){
    x.style.fontSize = 'medium'

}

function onmouseOve(x){
    const name = document.getElementById('name');
    
    x.style.color = "red";
    
}
function onmouseOut(x) {
    const description = document.getElementById('descpt');
    x.style.color = 'white';
}

function icon(x){
    const icon = document.getElementById('icon');
    x.style.color = 'yellow';
}
function icona(x){
    x.style.color = 'blue'
}


