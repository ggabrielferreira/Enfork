let novaPalavra;
let palavras = [];
let p

selecionarElemento('#adicionar').addEventListener('click', function(){
    novaPalavra = selecionarElemento('#novaPalavra').value; 
    palavras.push(novaPalavra);
    selecionarElemento('#novaPalavra').value = "";
    p = document.createElement('p');
    p.textContent = novaPalavra;
    selecionarElemento('#palavras').appendChild(p);
    return palavras
  });