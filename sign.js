const signbut = document.getElementById("signbut");
const terms = document.getElementById('terms');
const termin = document.getElementById('inputterms');

signbut.addEventListener('click', gototerms);
termin.addEventListener('click', consent);

function gototerms(){
    terms.classList.toggle('open');
}

function consent(){
    window.open("https://www.youtube.com/watch?v=Q_nxgjIY6qQ");
}

