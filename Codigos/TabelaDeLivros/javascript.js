var x = document.querySelectorAll('.servicos .col-md-3');
var novaImg = 'https://i.ibb.co/gZwjrZ4/buybooks-roxo.png';
var novaImg2 = 'https://i.ibb.co/RhQbmLH/download-roxo.png';

for (var i = 0; i < x.length; i++) {
    novoX = x[i];
    novoX.addEventListener('mouseover', function(event){
        this.querySelector('imbbuy').src = novaImg;
    });
}